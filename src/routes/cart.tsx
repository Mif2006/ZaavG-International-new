import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { PublicShell } from "@/components/public-shell";
import { useState, useRef, useEffect, useMemo } from "react";
import { useCart, CartItem } from "@/lib/cart-store";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Cart — ZAAV G" },
      {
        name: "description",
        content: "Complete your order at ZAAV G.",
      },
      { property: "og:title", content: "Cart — ZAAV G" },
      {
        property: "og:description",
        content: "Complete your order at ZAAV G.",
      },
    ],
  }),
  component: CartPage,
});

type Lang = "en" | "ru" | "id";

const COUNTRIES = [
  { name: "Afghanistan", code: "+93", flag: "🇦🇫", alpha3: "AFG" },
  { name: "Albania", code: "+355", flag: "🇦🇱", alpha3: "ALB" },
  { name: "Algeria", code: "+213", flag: "🇩🇿", alpha3: "DZA" },
  { name: "American Samoa", code: "+1-684", flag: "🇦🇸", alpha3: "ASM" },
  { name: "Andorra", code: "+376", flag: "🇦🇩", alpha3: "AND" },
  { name: "Angola", code: "+244", flag: "🇦🇴", alpha3: "AGO" },
  { name: "Anguilla", code: "+1-264", flag: "🇦🇮", alpha3: "AIA" },
  { name: "Antarctica", code: "+672", flag: "🇦🇶", alpha3: "ATA" },
  { name: "Antigua and Barbuda", code: "+1-268", flag: "🇦🇬", alpha3: "ATG" },
  { name: "Argentina", code: "+54", flag: "🇦🇷", alpha3: "ARG" },
  { name: "Armenia", code: "+374", flag: "🇦🇲", alpha3: "ARM" },
  { name: "Aruba", code: "+297", flag: "🇦🇼", alpha3: "ABW" },
  { name: "Australia", code: "+61", flag: "🇦🇺", alpha3: "AUS" },
  { name: "Austria", code: "+43", flag: "🇦🇹", alpha3: "AUT" },
  { name: "Azerbaijan", code: "+994", flag: "🇦🇿", alpha3: "AZE" },
  { name: "Bahamas", code: "+1-242", flag: "🇧🇸", alpha3: "BHS" },
  { name: "Bahrain", code: "+973", flag: "🇧🇭", alpha3: "BHR" },
  { name: "Bangladesh", code: "+880", flag: "🇧🇩", alpha3: "BGD" },
  { name: "Barbados", code: "+1-246", flag: "🇧🇧", alpha3: "BRB" },
  { name: "Belarus", code: "+375", flag: "🇧🇾", alpha3: "BLR" },
  { name: "Belgium", code: "+32", flag: "🇧🇪", alpha3: "BEL" },
  { name: "Belize", code: "+501", flag: "🇧🇿", alpha3: "BLZ" },
  { name: "Benin", code: "+229", flag: "🇧🇯", alpha3: "BEN" },
  { name: "Bermuda", code: "+1-441", flag: "🇧🇲", alpha3: "BMU" },
  { name: "Bhutan", code: "+975", flag: "🇧🇹", alpha3: "BTN" },
  { name: "Bolivia", code: "+591", flag: "🇧🇴", alpha3: "BOL" },
  { name: "Bosnia and Herzegovina", code: "+387", flag: "🇧🇦", alpha3: "BIH" },
  { name: "Botswana", code: "+267", flag: "🇧🇼", alpha3: "BWA" },
  { name: "Brazil", code: "+55", flag: "🇧🇷", alpha3: "BRA" },
  { name: "British Indian Ocean Territory", code: "+246", flag: "🇮🇴", alpha3: "IOT" },
  { name: "British Virgin Islands", code: "+1-284", flag: "🇻🇬", alpha3: "VGB" },
  { name: "Brunei", code: "+673", flag: "🇧🇳", alpha3: "BRN" },
  { name: "Bulgaria", code: "+359", flag: "🇧🇬", alpha3: "BGR" },
  { name: "Burkina Faso", code: "+226", flag: "🇧🇫", alpha3: "BFA" },
  { name: "Burundi", code: "+257", flag: "🇧🇮", alpha3: "BDI" },
  { name: "Cambodia", code: "+855", flag: "🇰🇭", alpha3: "KHM" },
  { name: "Cameroon", code: "+237", flag: "🇨🇲", alpha3: "CMR" },
  { name: "Canada", code: "+1", flag: "🇨🇦", alpha3: "CAN" },
  { name: "Cape Verde", code: "+238", flag: "🇨🇻", alpha3: "CPV" },
  { name: "Cayman Islands", code: "+1-345", flag: "🇰🇾", alpha3: "CYM" },
  { name: "Central African Republic", code: "+236", flag: "🇨🇫", alpha3: "CAF" },
  { name: "Chad", code: "+235", flag: "🇹🇩", alpha3: "TCD" },
  { name: "Chile", code: "+56", flag: "🇨🇱", alpha3: "CHL" },
  { name: "China", code: "+86", flag: "🇨🇳", alpha3: "CHN" },
  { name: "Christmas Island", code: "+61", flag: "🇨🇽", alpha3: "CXR" },
  { name: "Cocos (Keeling) Islands", code: "+61", flag: "🇨🇨", alpha3: "CCK" },
  { name: "Colombia", code: "+57", flag: "🇨🇴", alpha3: "COL" },
  { name: "Comoros", code: "+269", flag: "🇰🇲", alpha3: "COM" },
  { name: "Congo - Brazzaville", code: "+242", flag: "🇨🇬", alpha3: "COG" },
  { name: "Congo - Kinshasa", code: "+243", flag: "🇨🇩", alpha3: "COD" },
  { name: "Cook Islands", code: "+682", flag: "🇨🇰", alpha3: "COK" },
  { name: "Costa Rica", code: "+506", flag: "🇨🇷", alpha3: "CRI" },
  { name: "Cote d'Ivoire", code: "+225", flag: "🇨🇮", alpha3: "CIV" },
  { name: "Croatia", code: "+385", flag: "🇭🇷", alpha3: "HRV" },
  { name: "Cuba", code: "+53", flag: "🇨🇺", alpha3: "CUB" },
  { name: "Curaçao", code: "+599", flag: "🇨🇼", alpha3: "CUW" },
  { name: "Cyprus", code: "+357", flag: "🇨🇾", alpha3: "CYP" },
  { name: "Czech Republic", code: "+420", flag: "🇨🇿", alpha3: "CZE" },
  { name: "Denmark", code: "+45", flag: "🇩🇰", alpha3: "DNK" },
  { name: "Djibouti", code: "+253", flag: "🇩🇯", alpha3: "DJI" },
  { name: "Dominica", code: "+1-767", flag: "🇩🇲", alpha3: "DMA" },
  { name: "Dominican Republic", code: "+1-809", flag: "🇩🇴", alpha3: "DOM" },
  { name: "Ecuador", code: "+593", flag: "🇪🇨", alpha3: "ECU" },
  { name: "Egypt", code: "+20", flag: "🇪🇬", alpha3: "EGY" },
  { name: "El Salvador", code: "+503", flag: "🇸🇻", alpha3: "SLV" },
  { name: "Equatorial Guinea", code: "+240", flag: "🇬🇶", alpha3: "GNQ" },
  { name: "Eritrea", code: "+291", flag: "🇪🇷", alpha3: "ERI" },
  { name: "Estonia", code: "+372", flag: "🇪🇪", alpha3: "EST" },
  { name: "Eswatini", code: "+268", flag: "🇸🇿", alpha3: "SWZ" },
  { name: "Ethiopia", code: "+251", flag: "🇪🇹", alpha3: "ETH" },
  { name: "Falkland Islands", code: "+500", flag: "🇫🇰", alpha3: "FLK" },
  { name: "Faroe Islands", code: "+298", flag: "🇫🇴", alpha3: "FRO" },
  { name: "Fiji", code: "+679", flag: "🇫🇯", alpha3: "FJI" },
  { name: "Finland", code: "+358", flag: "🇫🇮", alpha3: "FIN" },
  { name: "France", code: "+33", flag: "🇫🇷", alpha3: "FRA" },
  { name: "French Guiana", code: "+594", flag: "🇬🇫", alpha3: "GUF" },
  { name: "French Polynesia", code: "+689", flag: "🇵🇫", alpha3: "PYF" },
  { name: "Gabon", code: "+241", flag: "🇬🇦", alpha3: "GAB" },
  { name: "Gambia", code: "+220", flag: "🇬🇲", alpha3: "GMB" },
  { name: "Georgia", code: "+995", flag: "🇬🇪", alpha3: "GEO" },
  { name: "Germany", code: "+49", flag: "🇩🇪", alpha3: "DEU" },
  { name: "Ghana", code: "+233", flag: "🇬🇭", alpha3: "GHA" },
  { name: "Gibraltar", code: "+350", flag: "🇬🇮", alpha3: "GIB" },
  { name: "Greece", code: "+30", flag: "🇬🇷", alpha3: "GRC" },
  { name: "Greenland", code: "+299", flag: "🇬🇱", alpha3: "GRL" },
  { name: "Grenada", code: "+1-473", flag: "🇬🇩", alpha3: "GRD" },
  { name: "Guadeloupe", code: "+590", flag: "🇬🇵", alpha3: "GLP" },
  { name: "Guam", code: "+1-671", flag: "🇬🇺", alpha3: "GUM" },
  { name: "Guatemala", code: "+502", flag: "🇬🇹", alpha3: "GTM" },
  { name: "Guernsey", code: "+44-1481", flag: "🇬🇬", alpha3: "GGY" },
  { name: "Guinea", code: "+224", flag: "🇬🇳", alpha3: "GIN" },
  { name: "Guinea-Bissau", code: "+245", flag: "🇬🇼", alpha3: "GNB" },
  { name: "Guyana", code: "+592", flag: "🇬🇾", alpha3: "GUY" },
  { name: "Haiti", code: "+509", flag: "🇭🇹", alpha3: "HTI" },
  { name: "Honduras", code: "+504", flag: "🇭🇳", alpha3: "HND" },
  { name: "Hong Kong", code: "+852", flag: "🇭🇰", alpha3: "HKG" },
  { name: "Hungary", code: "+36", flag: "🇭🇺", alpha3: "HUN" },
  { name: "Iceland", code: "+354", flag: "🇮🇸", alpha3: "ISL" },
  { name: "India", code: "+91", flag: "🇮🇳", alpha3: "IND" },
  { name: "Indonesia", code: "+62", flag: "🇮🇩", alpha3: "IDN" },
  { name: "Iran", code: "+98", flag: "🇮🇷", alpha3: "IRN" },
  { name: "Iraq", code: "+964", flag: "🇮🇶", alpha3: "IRQ" },
  { name: "Ireland", code: "+353", flag: "🇮🇪", alpha3: "IRL" },
  { name: "Isle of Man", code: "+44-1624", flag: "🇮🇲", alpha3: "IMN" },
  { name: "Israel", code: "+972", flag: "🇮🇱", alpha3: "ISR" },
  { name: "Italy", code: "+39", flag: "🇮🇹", alpha3: "ITA" },
  { name: "Jamaica", code: "+1-876", flag: "🇯🇲", alpha3: "JAM" },
  { name: "Japan", code: "+81", flag: "🇯🇵", alpha3: "JPN" },
  { name: "Jersey", code: "+44-1534", flag: "🇯🇪", alpha3: "JEY" },
  { name: "Jordan", code: "+962", flag: "🇯🇴", alpha3: "JOR" },
  { name: "Kazakhstan", code: "+7", flag: "🇰🇿", alpha3: "KAZ" },
  { name: "Kenya", code: "+254", flag: "🇰🇪", alpha3: "KEN" },
  { name: "Kiribati", code: "+686", flag: "🇰🇮", alpha3: "KIR" },
  { name: "Kosovo", code: "+383", flag: "🇽🇰", alpha3: "XKX" },
  { name: "Kuwait", code: "+965", flag: "🇰🇼", alpha3: "KWT" },
  { name: "Kyrgyzstan", code: "+996", flag: "🇰🇬", alpha3: "KGZ" },
  { name: "Laos", code: "+856", flag: "🇱🇦", alpha3: "LAO" },
  { name: "Latvia", code: "+371", flag: "🇱🇻", alpha3: "LVA" },
  { name: "Lebanon", code: "+961", flag: "🇱🇧", alpha3: "LBN" },
  { name: "Lesotho", code: "+266", flag: "🇱🇸", alpha3: "LSO" },
  { name: "Liberia", code: "+231", flag: "🇱🇷", alpha3: "LBR" },
  { name: "Libya", code: "+218", flag: "🇱🇾", alpha3: "LBY" },
  { name: "Liechtenstein", code: "+423", flag: "🇱🇮", alpha3: "LIE" },
  { name: "Lithuania", code: "+370", flag: "🇱🇹", alpha3: "LTU" },
  { name: "Luxembourg", code: "+352", flag: "🇱🇺", alpha3: "LUX" },
  { name: "Macau", code: "+853", flag: "🇲🇴", alpha3: "MAC" },
  { name: "Madagascar", code: "+261", flag: "🇲🇬", alpha3: "MDG" },
  { name: "Malawi", code: "+265", flag: "🇲🇼", alpha3: "MWI" },
  { name: "Malaysia", code: "+60", flag: "🇲🇾", alpha3: "MYS" },
  { name: "Maldives", code: "+960", flag: "🇲🇻", alpha3: "MDV" },
  { name: "Mali", code: "+223", flag: "🇲🇱", alpha3: "MLI" },
  { name: "Malta", code: "+356", flag: "🇲🇹", alpha3: "MLT" },
  { name: "Marshall Islands", code: "+692", flag: "🇲🇭", alpha3: "MHL" },
  { name: "Martinique", code: "+596", flag: "🇲🇶", alpha3: "MTQ" },
  { name: "Mauritania", code: "+222", flag: "🇲🇷", alpha3: "MRT" },
  { name: "Mauritius", code: "+230", flag: "🇲🇺", alpha3: "MUS" },
  { name: "Mayotte", code: "+262", flag: "🇾🇹", alpha3: "MYT" },
  { name: "Mexico", code: "+52", flag: "🇲🇽", alpha3: "MEX" },
  { name: "Micronesia", code: "+691", flag: "🇫🇲", alpha3: "FSM" },
  { name: "Moldova", code: "+373", flag: "🇲🇩", alpha3: "MDA" },
  { name: "Monaco", code: "+377", flag: "🇲🇨", alpha3: "MCO" },
  { name: "Mongolia", code: "+976", flag: "🇲🇳", alpha3: "MNG" },
  { name: "Montenegro", code: "+382", flag: "🇲🇪", alpha3: "MNE" },
  { name: "Montserrat", code: "+1-664", flag: "🇲🇸", alpha3: "MSR" },
  { name: "Morocco", code: "+212", flag: "🇲🇦", alpha3: "MAR" },
  { name: "Mozambique", code: "+258", flag: "🇲🇿", alpha3: "MOZ" },
  { name: "Myanmar", code: "+95", flag: "🇲🇲", alpha3: "MMR" },
  { name: "Namibia", code: "+264", flag: "🇳🇦", alpha3: "NAM" },
  { name: "Nauru", code: "+674", flag: "🇳🇷", alpha3: "NRU" },
  { name: "Nepal", code: "+977", flag: "🇳🇵", alpha3: "NPL" },
  { name: "Netherlands", code: "+31", flag: "🇳🇱", alpha3: "NLD" },
  { name: "New Caledonia", code: "+687", flag: "🇳🇨", alpha3: "NCL" },
  { name: "New Zealand", code: "+64", flag: "🇳🇿", alpha3: "NZL" },
  { name: "Nicaragua", code: "+505", flag: "🇳🇮", alpha3: "NIC" },
  { name: "Niger", code: "+227", flag: "🇳🇪", alpha3: "NER" },
  { name: "Nigeria", code: "+234", flag: "🇳🇬", alpha3: "NGA" },
  { name: "Niue", code: "+683", flag: "🇳🇺", alpha3: "NIU" },
  { name: "Norfolk Island", code: "+672", flag: "🇳🇫", alpha3: "NFK" },
  { name: "North Korea", code: "+850", flag: "🇰🇵", alpha3: "PRK" },
  { name: "North Macedonia", code: "+389", flag: "🇲🇰", alpha3: "MKD" },
  { name: "Northern Mariana Islands", code: "+1-670", flag: "🇲🇵", alpha3: "MNP" },
  { name: "Norway", code: "+47", flag: "🇳🇴", alpha3: "NOR" },
  { name: "Oman", code: "+968", flag: "🇴🇲", alpha3: "OMN" },
  { name: "Pakistan", code: "+92", flag: "🇵🇰", alpha3: "PAK" },
  { name: "Palau", code: "+680", flag: "🇵🇼", alpha3: "PLW" },
  { name: "Palestine", code: "+970", flag: "🇵🇸", alpha3: "PSE" },
  { name: "Panama", code: "+507", flag: "🇵🇦", alpha3: "PAN" },
  { name: "Papua New Guinea", code: "+675", flag: "🇵🇬", alpha3: "PNG" },
  { name: "Paraguay", code: "+595", flag: "🇵🇾", alpha3: "PRY" },
  { name: "Peru", code: "+51", flag: "🇵🇪", alpha3: "PER" },
  { name: "Philippines", code: "+63", flag: "🇵🇭", alpha3: "PHL" },
  { name: "Poland", code: "+48", flag: "🇵🇱", alpha3: "POL" },
  { name: "Portugal", code: "+351", flag: "🇵🇹", alpha3: "PRT" },
  { name: "Puerto Rico", code: "+1-787", flag: "🇵🇷", alpha3: "PRI" },
  { name: "Qatar", code: "+974", flag: "🇶🇦", alpha3: "QAT" },
  { name: "Réunion", code: "+262", flag: "🇷🇪", alpha3: "REU" },
  { name: "Romania", code: "+40", flag: "🇷🇴", alpha3: "ROU" },
  { name: "Russia", code: "+7", flag: "🇷🇺", alpha3: "RUS" },
  { name: "Rwanda", code: "+250", flag: "🇷🇼", alpha3: "RWA" },
  { name: "Samoa", code: "+685", flag: "🇼🇸", alpha3: "WSM" },
  { name: "San Marino", code: "+378", flag: "🇸🇲", alpha3: "SMR" },
  { name: "Sao Tome and Principe", code: "+239", flag: "🇸🇹", alpha3: "STP" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦", alpha3: "SAU" },
  { name: "Senegal", code: "+221", flag: "🇸🇳", alpha3: "SEN" },
  { name: "Serbia", code: "+381", flag: "🇷🇸", alpha3: "SRB" },
  { name: "Seychelles", code: "+248", flag: "🇸🇨", alpha3: "SYC" },
  { name: "Sierra Leone", code: "+232", flag: "🇸🇱", alpha3: "SLE" },
  { name: "Singapore", code: "+65", flag: "🇸🇬", alpha3: "SGP" },
  { name: "Sint Maarten", code: "+1-721", flag: "🇸🇽", alpha3: "SXM" },
  { name: "Slovakia", code: "+421", flag: "🇸🇰", alpha3: "SVK" },
  { name: "Slovenia", code: "+386", flag: "🇸🇮", alpha3: "SVN" },
  { name: "Solomon Islands", code: "+677", flag: "🇸🇧", alpha3: "SLB" },
  { name: "Somalia", code: "+252", flag: "🇸🇴", alpha3: "SOM" },
  { name: "South Africa", code: "+27", flag: "🇿🇦", alpha3: "ZAF" },
  { name: "South Korea", code: "+82", flag: "🇰🇷", alpha3: "KOR" },
  { name: "South Sudan", code: "+211", flag: "🇸🇸", alpha3: "SSD" },
  { name: "Spain", code: "+34", flag: "🇪🇸", alpha3: "ESP" },
  { name: "Sri Lanka", code: "+94", flag: "🇱🇰", alpha3: "LKA" },
  { name: "St. Barthélemy", code: "+590", flag: "🇧🇱", alpha3: "BLM" },
  { name: "St. Helena", code: "+290", flag: "🇸🇭", alpha3: "SHN" },
  { name: "St. Kitts and Nevis", code: "+1-869", flag: "🇰🇳", alpha3: "KNA" },
  { name: "St. Lucia", code: "+1-758", flag: "🇱🇨", alpha3: "LCA" },
  { name: "St. Martin", code: "+590", flag: "🇲🇫", alpha3: "MAF" },
  { name: "St. Pierre and Miquelon", code: "+508", flag: "🇵🇲", alpha3: "SPM" },
  { name: "St. Vincent and Grenadines", code: "+1-784", flag: "🇻🇨", alpha3: "VCT" },
  { name: "Sudan", code: "+249", flag: "🇸🇩", alpha3: "SDN" },
  { name: "Suriname", code: "+597", flag: "🇸🇷", alpha3: "SUR" },
  { name: "Svalbard and Jan Mayen", code: "+47", flag: "🇸🇯", alpha3: "SJM" },
  { name: "Sweden", code: "+46", flag: "🇸🇪", alpha3: "SWE" },
  { name: "Switzerland", code: "+41", flag: "🇨🇭", alpha3: "CHE" },
  { name: "Syria", code: "+963", flag: "🇸🇾", alpha3: "SYR" },
  { name: "Taiwan", code: "+886", flag: "🇹🇼", alpha3: "TWN" },
  { name: "Tajikistan", code: "+992", flag: "🇹🇯", alpha3: "TJK" },
  { name: "Tanzania", code: "+255", flag: "🇹🇿", alpha3: "TZA" },
  { name: "Thailand", code: "+66", flag: "🇹🇭", alpha3: "THA" },
  { name: "Timor-Leste", code: "+670", flag: "🇹🇱", alpha3: "TLS" },
  { name: "Togo", code: "+228", flag: "🇹🇬", alpha3: "TGO" },
  { name: "Tokelau", code: "+690", flag: "🇹🇰", alpha3: "TKL" },
  { name: "Tonga", code: "+676", flag: "🇹🇴", alpha3: "TON" },
  { name: "Trinidad and Tobago", code: "+1-868", flag: "🇹🇹", alpha3: "TTO" },
  { name: "Tunisia", code: "+216", flag: "🇹🇳", alpha3: "TUN" },
  { name: "Turkey", code: "+90", flag: "🇹🇷", alpha3: "TUR" },
  { name: "Turkmenistan", code: "+993", flag: "🇹🇲", alpha3: "TKM" },
  { name: "Turks and Caicos Islands", code: "+1-649", flag: "🇹🇨", alpha3: "TCA" },
  { name: "Tuvalu", code: "+688", flag: "🇹🇻", alpha3: "TUV" },
  { name: "U.S. Virgin Islands", code: "+1-340", flag: "🇻🇮", alpha3: "VIR" },
  { name: "Uganda", code: "+256", flag: "🇺🇬", alpha3: "UGA" },
  { name: "Ukraine", code: "+380", flag: "🇺🇦", alpha3: "UKR" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪", alpha3: "ARE" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧", alpha3: "GBR" },
  { name: "United States", code: "+1", flag: "🇺🇸", alpha3: "USA" },
  { name: "Uruguay", code: "+598", flag: "🇺🇾", alpha3: "URY" },
  { name: "Uzbekistan", code: "+998", flag: "🇺🇿", alpha3: "UZB" },
  { name: "Vanuatu", code: "+678", flag: "🇻🇺", alpha3: "VUT" },
  { name: "Vatican City", code: "+39-06", flag: "🇻🇦", alpha3: "VAT" },
  { name: "Venezuela", code: "+58", flag: "🇻🇪", alpha3: "VEN" },
  { name: "Vietnam", code: "+84", flag: "🇻🇳", alpha3: "VNM" },
  { name: "Wallis and Futuna", code: "+681", flag: "🇼🇫", alpha3: "WLF" },
  { name: "Yemen", code: "+967", flag: "🇾🇪", alpha3: "YEM" },
  { name: "Zambia", code: "+260", flag: "🇿🇲", alpha3: "ZMB" },
  { name: "Zimbabwe", code: "+263", flag: "🇿🇼", alpha3: "ZWE" }
].sort((a, b) => a.name.localeCompare(b.name));

const CART_T = {
  en: {
    orderFormTitle: "Complete Your Order",
    orderFormSubtitle: "Fill in your details and we'll contact you shortly",
    contactInfo: "Contact Information",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    address: "Address",
    city: "City",
    postalCode: "Postal Code",
    country: "Country",
    orderNotes: "Order Notes (Optional)",
    orderSummary: "Order Summary",
    total: "Total",
    sendOrder: "Send Order",
    finalizeOrder: "Complete Order",
    firstNamePlaceholder: "Your first name",
    lastNamePlaceholder: "Your last name",
    emailPlaceholder: "your@email.com",
    phonePlaceholder: "Phone number",
    addressPlaceholder: "Street address",
    cityPlaceholder: "City",
    postalCodePlaceholder: "Postal code",
    countryPlaceholder: "Country",
    notesPlaceholder: "Special instructions, gift wrapping, etc.",
    sending: "Sending order...",
    success: "Order sent successfully! We'll contact you soon.",
    emptyCart: "Please add items to your cart first",
    failedLoad: "Failed to load cart. Please refresh.",
    removeItem: "Remove item",
    errors: {
      nameRequired: "Please enter your first and last name.",
      emailRequired: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address.",
      phoneRequired: "Please enter your phone number.",
      streetRequired: "Please enter your address.",
      cityRequired: "Please enter your city.",
      postalRequired: "Please enter your postal code.",
      countryRequired: "Please enter your country.",
      serverError: "Failed to send order. Please try again later.",
    },
  },
  ru: {
    orderFormTitle: "Оформить заказ",
    orderFormSubtitle: "Заполните данные, и мы свяжемся с вами в ближайшее время",
    contactInfo: "Контактная информация",
    firstName: "Имя",
    lastName: "Фамилия",
    email: "Email",
    phone: "Телефон",
    address: "Адрес",
    city: "Город",
    postalCode: "Индекс",
    country: "Страна",
    orderNotes: "Комментарий к заказу (необязательно)",
    orderSummary: "Ваш заказ",
    total: "Итого",
    sendOrder: "Отправить заказ",
    finalizeOrder: "Оформить заказ",
    firstNamePlaceholder: "Ваше имя",
    lastNamePlaceholder: "Ваша фамилия",
    emailPlaceholder: "your@email.com",
    phonePlaceholder: "Номер телефона",
    addressPlaceholder: "Улица, дом, квартира",
    cityPlaceholder: "Город",
    postalCodePlaceholder: "Индекс",
    countryPlaceholder: "Страна",
    notesPlaceholder: "Особые пожелания, упаковка подарка и т.д.",
    sending: "Отправка заказа...",
    success: "Заказ успешно отправлен! Мы свяжемся с вами скоро.",
    emptyCart: "Пожалуйста, добавьте товары в корзину",
    failedLoad: "Не удалось загрузить корзину. Обновите страницу.",
    removeItem: "Удалить товар",
    errors: {
      nameRequired: "Пожалуйста, укажите имя и фамилию.",
      emailRequired: "Пожалуйста, укажите ваш email.",
      emailInvalid: "Пожалуйста, введите корректный email.",
      phoneRequired: "Пожалуйста, укажите номер телефона.",
      streetRequired: "Пожалуйста, укажите адрес.",
      cityRequired: "Пожалуйста, укажите город.",
      postalRequired: "Пожалуйста, укажите почтовый индекс.",
      countryRequired: "Пожалуйста, укажите страну.",
      serverError: "Не удалось отправить заказ. Попробуйте снова чуть позже.",
    },
  },
  id: {
    orderFormTitle: "Selesaikan Pesanan Anda",
    orderFormSubtitle: "Isi detail Anda dan kami akan menghubungi Anda segera",
    contactInfo: "Informasi Kontak",
    firstName: "Nama Depan",
    lastName: "Nama Belakang",
    email: "Email",
    phone: "Telepon",
    address: "Alamat",
    city: "Kota",
    postalCode: "Kode Pos",
    country: "Negara",
    orderNotes: "Catatan Pesanan (Opsional)",
    orderSummary: "Ringkasan Pesanan",
    total: "Total",
    sendOrder: "Kirim Pesanan",
    finalizeOrder: "Selesaikan Pesanan",
    firstNamePlaceholder: "Nama depan Anda",
    lastNamePlaceholder: "Nama belakang Anda",
    emailPlaceholder: "email@anda.com",
    phonePlaceholder: "Nomor telepon",
    addressPlaceholder: "Alamat jalan",
    cityPlaceholder: "Kota",
    postalCodePlaceholder: "Kode pos",
    countryPlaceholder: "Negara",
    notesPlaceholder: "Instruksi khusus, pembungkus kado, dll.",
    sending: "Mengirim pesanan...",
    success: "Pesanan berhasil dikirim! Kami akan menghubungi Anda segera.",
    emptyCart: "Silakan tambahkan item ke keranjang Anda",
    failedLoad: "Gagal memuat keranjang. Silakan segarkan.",
    removeItem: "Hapus item",
    errors: {
      nameRequired: "Harap isi nama depan dan belakang Anda.",
      emailRequired: "Harap isi alamat email Anda.",
      emailInvalid: "Harap isi alamat email yang valid.",
      phoneRequired: "Harap isi nomor telepon Anda.",
      streetRequired: "Harap isi alamat Anda.",
      cityRequired: "Harap isi kota Anda.",
      postalRequired: "Harap isi kode pos Anda.",
      countryRequired: "Harap isi negara Anda.",
      serverError: "Gagal mengirim pesanan. Silakan coba lagi nanti.",
    },
  },
};

function CartPage() {
  const { lang } = useI18n();
  const t = CART_T[lang as Lang] || CART_T.en;

  const { items, total, removeItem, updateQuantity } = useCart();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(
    COUNTRIES.find((c) => c.name === "Indonesia") || COUNTRIES[0]
  );
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [notes, setNotes] = useState("");

  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [statusMessage, setStatusMessage] = useState<{ text: string; type: "success" | "error" | "loading" } | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const formSectionRef = useRef<HTMLDivElement>(null);

  const filteredCountries = useMemo(() => {
    if (!searchQuery) return COUNTRIES;
    return COUNTRIES.filter((c) =>
      c.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  useEffect(() => {
    if (!isCountryOpen) {
      setSearchQuery("");
      return;
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.length === 1 && /[a-zA-Z]/.test(e.key)) {
        if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
        const newQuery = searchQuery + e.key;
        setSearchQuery(newQuery);
        searchTimeoutRef.current = setTimeout(() => setSearchQuery(""), 1000);

        const match = COUNTRIES.find((c) =>
          c.name.toLowerCase().startsWith(newQuery.toLowerCase())
        );
        if (match) {
          const el = document.getElementById(`country-option-${match.code}-${match.name}`);
          el?.scrollIntoView({ block: "nearest" });
        }
      } else if (e.key === "Backspace") {
        setSearchQuery((prev) => prev.slice(0, -1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCountryOpen, searchQuery]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsCountryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleFinalizeScroll = () => {
    if (formSectionRef.current) {
      formSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const escapeMD = (text: string) => {
    return String(text).replace(/([_*\[\]()~`>#+\-=|{}.!])/g, '\\$1');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (items.length === 0) {
      setStatusMessage({ text: t.emptyCart, type: "error" });
      return;
    }

    setIsProcessing(true);
    setStatusMessage({ text: t.sending, type: "loading" });

    try {
      const fullPhone = `${selectedCountry.code} ${phoneNumber.replace(/^[\+\s\-\(\)]+/g, "")}`;

      let msg = "🛍️ *NEW ORDER - ZAAV G*\n";
      msg += `📅 ${new Date().toLocaleString("id-ID", { timeZone: "Asia/Makassar" })}\n\n`;
      
      msg += "👤 *Customer Details*\n";
      msg += `Name: ${escapeMD(firstName)} ${escapeMD(lastName)}\n`;
      msg += `Email: ${escapeMD(email)}\n`;
      msg += `Phone: ${escapeMD(fullPhone)}\n\n`;
      
      msg += "📍 *Shipping Address*\n";
      msg += `${escapeMD(address)}\n`;
      msg += `${escapeMD(city)}, ${escapeMD(postalCode)}\n`;
      msg += `${escapeMD(country)}\n\n`;
      
      msg += "📦 *Order Items*\n";
      items.forEach((item) => {
        const itemTotal = (item.price * item.quantity).toLocaleString("id-ID");
        msg += `• ${escapeMD(item.title)}\n`;
        if (item.size) msg += `  Variant: ${escapeMD(item.size)}\n`;
        msg += `  Qty: ${item.quantity} × USD ${(item.price).toLocaleString("id-ID")} = USD ${itemTotal}\n`;
      });
      
      msg += `\n💰 *Total: USD ${total.toLocaleString("id-ID")}*\n`;
      
      if (notes) {
        msg += `\n📝 *Notes*\n${escapeMD(notes)}\n`;
      }
      
      msg += "\n🔗 [View Cart](https://zaavgbali.com/cart)";

      const ENDPOINT = "https://zaavg-bali-bot.vercel.app/api/telegram";
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg, parse_mode: "Markdown" }),
      });

      const result = await res.json();

      if (res.ok) {
        setStatusMessage({ text: t.success, type: "success" });
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setAddress("");
        setCity("");
        setPostalCode("");
        setCountry("");
        setNotes("");
      } else {
        throw new Error(result.error || "Failed to send");
      }
    } catch (err: any) {
      setStatusMessage({ text: `❌ ${err?.message || t.errors.serverError}`, type: "error" });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <PublicShell>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        .zav-order-form * { box-sizing: border-box; margin: 0; padding: 0; }
        
        .zav-order-form {
          font-family: 'Inter', sans-serif;
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 40px;
          background: #fafafa;
        }
        
        .zav-order-form__header {
          text-align: center;
          margin-bottom: 48px;
        }
        
        .zav-order-form__title {
          font-size: 2rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 12px;
        }
        
        .zav-order-form__subtitle {
          font-size: 0.95rem;
          color: #666;
          font-weight: 400;
        }
        
        .zav-order-form__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }
        
        .zav-order-form__section { order: 1; }
        .zav-cart-summary { order: 2; }
        
        .zav-order-form__section {
          background: #fff;
          padding: 32px;
          border-radius: 8px;
          border: 1px solid #e5e5e5;
        }
        
        .zav-order-form__section-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 24px;
          padding-bottom: 12px;
          border-bottom: 1px solid #e5e5e5;
        }
        
        .zav-form-group {
          margin-bottom: 20px;
        }
        
        .zav-form-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: #333;
          margin-bottom: 8px;
        }
        
        .zav-form-label .required {
          color: #d73a49;
          margin-left: 2px;
        }
        
        .zav-form-input,
        .zav-form-textarea {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 0.95rem;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s ease;
          background: #fff;
          color: #1a1a1a;
        }

        .zav-form-select,
        .zav-country-select {
          width: 100%;
          padding: 12px 36px 12px 16px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 0.95rem;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s ease;
          background: #fff;
          color: #1a1a1a;
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-size: 16px;
        }

        .zav-phone-group {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .zav-country-select {
          flex: 0 0 100px;
          max-width: 110px;
          padding: 12px 36px 12px 12px;
          font-size: 0.9rem;
        }

        .zav-phone-input {
          flex: 1;
          min-width: 0;
          padding: 12px 16px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 0.95rem;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s ease;
        }

        .zav-phone-input:focus,
        .zav-country-select:focus,
        .zav-form-input:focus,
        .zav-form-textarea:focus {
          outline: none;
          border-color: #008060;
          box-shadow: 0 0 0 3px rgba(0,128,96,0.1);
        }
        
        .zav-form-textarea {
          resize: vertical;
          min-height: 100px;
        }
        
        .zav-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        
        .zav-cart-summary {
          background: #fff;
          padding: 32px;
          border-radius: 8px;
          border: 1px solid #e5e5e5;
          position: sticky;
          top: 20px;
          min-width: 0;
        }
        
        .zav-cart-item {
          display: flex;
          gap: 16px;
          padding: 16px 0;
          border-bottom: 1px solid #f0f0f0;
          min-width: 0;
          position: relative;
        }
        
        .zav-cart-item:last-child {
          border-bottom: none;
        }
        
        .zav-cart-item__image {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 6px;
          background: #f5f5f5;
          flex-shrink: 0;
        }
        
        .zav-cart-item__details {
          flex: 1;
          min-width: 0;
        }
        
        .zav-cart-item__title {
          font-size: 0.95rem;
          font-weight: 500;
          color: #1a1a1a;
          margin-bottom: 4px;
          word-break: break-word;
          padding-right: 24px;
        }
        
        .zav-cart-item__variant {
          font-size: 0.875rem;
          color: #666;
          margin-bottom: 8px;
        }
        
        .zav-cart-item__qty {
          font-size: 0.875rem;
          color: #999;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 6px;
        }
        
        .zav-cart-item__price {
          font-size: 0.95rem;
          font-weight: 600;
          color: #1a1a1a;
          white-space: nowrap;
          text-align: right;
          flex-shrink: 0;
          margin-left: auto;
        }

        .zav-cart-item__remove {
          position: absolute;
          top: 45%;
          right: 0;
          width: 24px;
          height: 24px;
          border: none;
          background: transparent;
          color: #999;
          font-size: 1.25rem;
          line-height: 1;
          cursor: pointer;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          padding: 0;
        }

        .zav-cart-item__remove:hover {
          color: #d73a49;
          background: rgba(215, 58, 73, 0.08);
        }
        
        .zav-cart-total {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 2px solid #e5e5e5;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .zav-cart-total__label {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1a1a1a;
        }
        
        .zav-cart-total__amount {
          font-size: 1.5rem;
          font-weight: 700;
          color: #008060;
          word-break: break-word;
          text-align: right;
        }
        
        .zav-submit-btn {
          width: 100%;
          margin-top: 24px;
          padding: 16px 32px;
          background: #000;
          color: #fff;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .zav-submit-btn:hover {
          background: #333;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        .zav-submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .zav-desktop-only { display: block; }
        .zav-mobile-only { display: none; }
        
        .zav-status {
          margin-top: 20px;
          padding: 16px;
          border-radius: 6px;
          font-size: 0.95rem;
          text-align: center;
          display: none;
        }
        
        .zav-status.show { display: block; }
        .zav-status.success { background: #dcffe4; color: #22863a; border: 1px solid #22863a; }
        .zav-status.error { background: #ffeef0; color: #d73a49; border: 1px solid #d73a49; }
        .zav-status.loading { background: #f0f0f0; color: #666; border: 1px solid #ddd; }
        
        @media (max-width: 968px) {
          .zav-desktop-only { display: none !important; }
          .zav-mobile-only { display: block !important; }

          .zav-order-form__grid { 
            grid-template-columns: 1fr; 
          }
          
          .zav-order-form__section { order: 2; }
          .zav-cart-summary { 
            order: 1; 
            position: static;
            margin-bottom: 32px;
          }
          
          .zav-form-row { grid-template-columns: 1fr; }
          
          .zav-phone-group { 
            flex-direction: column; 
            gap: 8px;
            align-items: stretch;
          }
          
          .zav-country-select {
            flex: 1;
            max-width: 100%;
            width: 100%;
            padding: 12px 36px 12px 16px;
            font-size: 0.95rem;
          }
          
          .zav-phone-input {
            width: 100%;
            padding: 12px 16px;
            font-size: 0.95rem;
          }
          
          .zav-cart-item {
            flex-wrap: wrap;
            align-items: flex-start;
          }
          
          .zav-cart-item__details {
            flex: 1 1 calc(100% - 96px);
            min-width: 0;
          }
          
          .zav-cart-item__price {
            width: 100%;
            text-align: right;
            margin-top: 8px;
            padding-left: 96px;
            box-sizing: border-box;
          }
          
          .zav-cart-item__remove {
            top: 8px;
            right: 8px;
          }
          
          .zav-order-form { padding: 40px 24px; }
        }
        
        @media (max-width: 480px) {
          .zav-cart-item__image {
            width: 70px;
            height: 70px;
          }
          
          .zav-cart-item__details {
            flex: 1 1 calc(100% - 86px);
          }
          
          .zav-cart-item__price {
            padding-left: 86px;
            font-size: 0.9rem;
          }
          
          .zav-cart-total__amount {
            font-size: 1.25rem;
          }
        }
        
        .zav-order-form,
        .zav-cart-summary,
        .zav-cart-item {
          overflow-x: hidden;
        }
      `}</style>

      <div className="zav-order-form">
        <div className="zav-order-form__header">
          <h2 className="zav-order-form__title">{t.orderFormTitle}</h2>
          <p className="zav-order-form__subtitle">{t.orderFormSubtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="zav-order-form__grid">
          {/* Left Column: Customer Info */}
          <div className="zav-order-form__section" ref={formSectionRef}>
            <h3 className="zav-order-form__section-title">{t.contactInfo}</h3>
            
            <div className="zav-form-row">
              <div className="zav-form-group">
                <label className="zav-form-label">
                  {t.firstName} <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="first_name"
                  className="zav-form-input"
                  required
                  placeholder={t.firstNamePlaceholder}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="zav-form-group">
                <label className="zav-form-label">
                  {t.lastName} <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="last_name"
                  className="zav-form-input"
                  required
                  placeholder={t.lastNamePlaceholder}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="zav-form-group">
              <label className="zav-form-label">
                {t.email} <span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="zav-form-input"
                required
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="zav-form-group">
              <label className="zav-form-label">
                {t.phone} <span className="required">*</span>
              </label>
              <div className="zav-phone-group">
                <select
                  name="country_code"
                  className="zav-country-select"
                  id="countryCode"
                  required
                  value={selectedCountry.code}
                  onChange={(e) => {
                    const found = COUNTRIES.find((c) => c.code === e.target.value);
                    if (found) setSelectedCountry(found);
                  }}
                >
                  {COUNTRIES.map((c) => (
                    <option key={c.code + c.name} value={c.code}>
                      {c.flag} {c.code} {c.name}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phone"
                  className="zav-phone-input"
                  required
                  placeholder={t.phonePlaceholder}
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="zav-form-group">
              <label className="zav-form-label">
                {t.address} <span className="required">*</span>
              </label>
              <input
                type="text"
                name="address"
                className="zav-form-input"
                required
                placeholder={t.addressPlaceholder}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="zav-form-row">
              <div className="zav-form-group">
                <label className="zav-form-label">
                  {t.city} <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  className="zav-form-input"
                  required
                  placeholder={t.cityPlaceholder}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="zav-form-group">
                <label className="zav-form-label">
                  {t.postalCode} <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="postal_code"
                  className="zav-form-input"
                  required
                  placeholder={t.postalCodePlaceholder}
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                />
              </div>
            </div>

            <div className="zav-form-group">
              <label className="zav-form-label">
                {t.country} <span className="required">*</span>
              </label>
              <input
                type="text"
                name="country"
                className="zav-form-input"
                required
                placeholder={t.countryPlaceholder}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>

            <div className="zav-form-group">
              <label className="zav-form-label">{t.orderNotes}</label>
              <textarea
                name="notes"
                className="zav-form-textarea"
                placeholder={t.notesPlaceholder}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="zav-submit-btn zav-mobile-only"
              id="zav-submit-btn-mobile"
            >
              {isProcessing ? t.sending : t.sendOrder}
            </button>
          </div>

          {/* Right Column: Cart Summary */}
          <div className="zav-cart-summary">
            <h3 className="zav-order-form__section-title">{t.orderSummary}</h3>
            
            <div id="zav-cart-items">
              {items.length === 0 ? (
                <p style={{ color: "#666", textAlign: "center", padding: "40px" }}>
                  {t.emptyCart}
                </p>
              ) : (
                items.map((item) => {
                  const itemTotal = (item.price * item.quantity).toLocaleString("id-ID");
                  const itemPrice = (item.price).toLocaleString("id-ID");

                  return (
                    <div key={item.id} className="zav-cart-item">
                      <button
                        type="button"
                        className="zav-cart-item__remove"
                        aria-label={t.removeItem}
                        title={t.removeItem}
                        onClick={() => removeItem(item.id)}
                      >
                        ×
                      </button>
                      <img
                        src={item.image || "https://placehold.co/80"}
                        alt={item.title}
                        className="zav-cart-item__image"
                      />
                      <div className="zav-cart-item__details">
                        <div className="zav-cart-item__title">{item.title}</div>
                        {item.size && (
                          <div className="zav-cart-item__variant">Variant: {item.size}</div>
                        )}
                        <div className="zav-cart-item__qty">
                          <span>Qty: {item.quantity}</span>
                          <div className="flex items-center gap-1 ml-2">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="px-2 py-0.5 border border-gray-300 rounded text-xs hover:bg-gray-100 cursor-pointer"
                            >
                              −
                            </button>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-0.5 border border-gray-300 rounded text-xs hover:bg-gray-100 cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="zav-cart-item__price">USD {itemTotal}</div>
                    </div>
                  );
                })
              )}
            </div>
            
            <div className="zav-cart-total">
              <span className="zav-cart-total__label">{t.total}</span>
              <span className="zav-cart-total__amount" id="zav-cart-total">
                USD {total.toLocaleString("id-ID")}
              </span>
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="zav-submit-btn zav-desktop-only"
              id="zav-submit-btn"
            >
              {isProcessing ? t.sending : t.sendOrder}
            </button>
            
            <button
              type="button"
              className="zav-submit-btn zav-mobile-only"
              id="zav-finalize-btn"
              onClick={handleFinalizeScroll}
            >
              {t.finalizeOrder}
            </button>

            {statusMessage && (
              <div id="zav-status" className={`zav-status show ${statusMessage.type}`}>
                {statusMessage.text}
              </div>
            )}
          </div>
        </form>
      </div>
    </PublicShell>
  );
}