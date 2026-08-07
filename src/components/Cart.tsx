import { useState, useRef, useEffect, useMemo } from "react";
import { useCart, CartItem } from "@/lib/cart-store";

// Comprehensive list of countries with dial codes, flags, and ISO 3166-1 alpha-3 codes
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
    title: "Your Order",
    empty: "Your cart is empty.",
    checkout: "Delivery Information",
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    method: "Delivery Method",
    pickup: "Self Pickup (Bali Store)",
    delivery: "International / Indonesia Delivery",
    addressTitle: "Delivery Address",
    streetAddress: "Street Address, Apartment, Suite, etc.",
    city: "City / Town",
    province: "Province / State / Region",
    postalCode: "Postal Code / ZIP",
    country: "Country",
    placeOrder: "Pay",
    processing: "Processing...",
    total: "Subtotal",
    continue: "Continue Shopping",
    privacyTextBefore: "By clicking the \"Pay\" button you consent to the ",
    privacyLink: "Privacy Policy",
    pickupLocationTitle: "Pickup location:",
    pickupAddress: "Jl. Raya Singapadu, Singapadu, Gianyar, Bali, Indonesia",
    mapLinkText: "View on Google Maps",
    mapUrl: "https://www.google.com/maps/place/Zaav+G+jewelry/@-8.5921887,115.2630557,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd23f9ab07189a5:0x2729aeb27f922727!8m2!3d-8.592194!4d115.2656306!16s%2Fg%2F11nhk1nb4x?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D",
    undoText: "You removed",
    undoAction: "Undo",
    errors: {
      nameRequired: "Please enter your full name.",
      emailRequired: "Please enter your email address.",
      emailInvalid: "Please enter a valid email address.",
      phoneRequired: "Please enter your phone number.",
      streetRequired: "Please enter your street address.",
      cityRequired: "Please enter your city.",
      provinceRequired: "Please enter your province or state.",
      postalRequired: "Please enter your postal code.",
      countryRequired: "Please select your country.",
      serverError: "Unable to process payment right now. Please try again later.",
    },
  },
  ru: {
    title: "Ваш Заказ",
    empty: "Ваша корзина пуста.",
    checkout: "Информация для доставки",
    name: "Ваше Имя",
    email: "Email",
    phone: "Номер телефона",
    method: "Способ доставки",
    pickup: "Самовывоз (Магазин на Бали)",
    delivery: "Доставка по Индонезии / Другим странам",
    addressTitle: "Адрес доставки",
    streetAddress: "Улица, дом, квартира / офис",
    city: "Город / Населённый пункт",
    province: "Область / Регион / Штат",
    postalCode: "Почтовый индекс",
    country: "Страна",
    placeOrder: "Оплатить",
    processing: "Обработка...",
    total: "Итого",
    continue: "Продолжить покупки",
    privacyTextBefore: "Нажимая на кнопку \"Оплатить\" Вы соглашаетесь с ",
    privacyLink: "Политикой конфиденциальности",
    pickupLocationTitle: "Адрес самовывоза:",
    pickupAddress: "Jl. Raya Singapadu, Singapadu, Gianyar, Bali, Indonesia",
    mapLinkText: "Открыть на Google Картах",
    mapUrl: "https://www.google.com/maps/place/Zaav+G+jewelry/@-8.5921887,115.2630557,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd23f9ab07189a5:0x2729aeb27f922727!8m2!3d-8.592194!4d115.2656306!16s%2Fg%2F11nhk1nb4x?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D",
    undoText: "Вы удалили",
    undoAction: "Отменить",
    errors: {
      nameRequired: "Пожалуйста, укажите ваше имя.",
      emailRequired: "Пожалуйста, укажите ваш email.",
      emailInvalid: "Пожалуйста, введите корректный email.",
      phoneRequired: "Пожалуйста, укажите номер телефона.",
      streetRequired: "Пожалуйста, укажите адрес доставки.",
      cityRequired: "Пожалуйста, укажите город.",
      provinceRequired: "Пожалуйста, укажите регион или область.",
      postalRequired: "Пожалуйста, укажите почтовый индекс.",
      countryRequired: "Пожалуйста, выберите страну.",
      serverError: "Не удалось обработать платеж. Попробуйте снова чуть позже.",
    },
  },
  id: {
    title: "Pesanan Anda",
    empty: "Keranjang Anda kosong.",
    checkout: "Informasi Pengiriman",
    name: "Nama Lengkap",
    email: "Alamat Email",
    phone: "Nomor Telepon",
    method: "Metode Pengiriman",
    pickup: "Ambil Sendiri (Toko Bali)",
    delivery: "Pengiriman (Bali / Indonesia)",
    addressTitle: "Alamat Pengiriman",
    streetAddress: "Nama Jalan, Gedung, No. Rumah / Unit",
    city: "Kota / Kabupaten",
    province: "Provinsi / Negara Bagian",
    postalCode: "Kode Pos",
    country: "Negara",
    placeOrder: "Bayar",
    processing: "Memproses...",
    total: "Subtotal",
    continue: "Lanjut Belanja",
    privacyTextBefore: "Dengan mengklik tombol \"Bayar\" Anda menyetujui ",
    privacyLink: "Kebijakan Privasi",
    pickupLocationTitle: "Lokasi Pengambilan:",
    pickupAddress: "Jl. Raya Singapadu, Singapadu, Gianyar, Bali, Indonesia",
    mapLinkText: "Lihat di Google Maps",
    mapUrl: "https://www.google.com/maps/place/Zaav+G+jewelry/@-8.5921887,115.2630557,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd23f9ab07189a5:0x2729aeb27f922727!8m2!3d-8.592194!4d115.2656306!16s%2Fg%2F11nhk1nb4x?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D",
    undoText: "Anda menghapus",
    undoAction: "Batal",
    errors: {
      nameRequired: "Harap isi nama lengkap Anda.",
      emailRequired: "Harap isi alamat email Anda.",
      emailInvalid: "Harap isi alamat email yang valid.",
      phoneRequired: "Harap isi nomor telepon Anda.",
      streetRequired: "Harap isi alamat jalan Anda.",
      cityRequired: "Harap isi kota Anda.",
      provinceRequired: "Harap isi provinsi Anda.",
      postalRequired: "Harap isi kode pos Anda.",
      countryRequired: "Harap pilih negara Anda.",
      serverError: "Gagal memproses pembayaran. Silakan coba lagi nanti.",
    },
  },
};

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: string;
}

export function CartModal({ isOpen, onClose, lang }: CartModalProps) {
  const t = CART_T[lang as keyof typeof CART_T] || CART_T.en;

  const { items, total, removeItem, updateQuantity } = useCart();

  const [method, setMethod] = useState<"pickup" | "delivery">("pickup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(
    COUNTRIES.find((c) => c.name === "Indonesia") || COUNTRIES[0]
  );

  // Structured Full Address Fields
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  // Default delivery country code to 3-letter ISO alpha-3 ("IDN" for Indonesia)
  const [deliveryCountryCode, setDeliveryCountryCode] = useState("IDN");

  // Form Validation & API Error States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [apiError, setApiError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  // Load Midtrans Script dynamically when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const scriptSrc = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = import.meta.env.VITE_MIDTRANS_CLIENT_KEY;

    const scriptId = "midtrans-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = scriptSrc;
      script.setAttribute("data-client-key", clientKey);
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      const script = document.getElementById(scriptId);
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [isOpen]);

  // 5-second delayed deletion with smooth, immediate progress tracking
  const [pendingDeletions, setPendingDeletions] = useState<
    Record<
      string,
      {
        timer: NodeJS.Timeout;
        progressInterval: NodeJS.Timeout;
        timeLeft: number;
        progress: number;
        item: CartItem;
      }
    >
  >({});

  const handleDeleteClick = (item: CartItem) => {
    const duration = 5000;
    const startTime = Date.now();

    const timer = setTimeout(() => {
      removeItem(item.id);
      setPendingDeletions((prev) => {
        const copy = { ...prev };
        delete copy[item.id];
        return copy;
      });
    }, duration);

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(1, elapsed / duration);
      const timeLeft = Math.max(1, Math.ceil((duration - elapsed) / 1000));

      setPendingDeletions((prev) => {
        if (!prev[item.id]) return prev;
        return {
          ...prev,
          [item.id]: { ...prev[item.id], progress, timeLeft },
        };
      });
    }, 50);

    setPendingDeletions((prev) => ({
      ...prev,
      [item.id]: { timer, progressInterval, timeLeft: 5, progress: 0, item },
    }));
  };

  const handleUndo = (id: string) => {
    const pending = pendingDeletions[id];
    if (pending) {
      clearTimeout(pending.timer);
      clearInterval(pending.progressInterval);
      setPendingDeletions((prev) => {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      });
    }
  };

  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  // Helper to clear errors when input changes
  const clearError = (field: string) => {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
    if (apiError) setApiError(null);
  };

  // Comprehensive Form Validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = t.errors.nameRequired;
    }

    if (!email.trim()) {
      newErrors.email = t.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = t.errors.emailInvalid;
    }

    if (!phoneNumber.trim()) {
      newErrors.phone = t.errors.phoneRequired;
    }

    if (method === "delivery") {
      if (!streetAddress.trim()) {
        newErrors.streetAddress = t.errors.streetRequired;
      }
      if (!city.trim()) {
        newErrors.city = t.errors.cityRequired;
      }
      if (!province.trim()) {
        newErrors.province = t.errors.provinceRequired;
      }
      if (!postalCode.trim()) {
        newErrors.postalCode = t.errors.postalRequired;
      }
      if (!deliveryCountryCode.trim() || deliveryCountryCode.length !== 3) {
        newErrors.deliveryCountry = t.errors.countryRequired;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    // Validate inputs client-side first
    if (!validateForm()) {
      return;
    }

    setIsProcessing(true);

    try {
      const payload = {
        orderId: `ORDER-${Date.now()}`,
        grossAmount: total,
        customerDetails: {
          first_name: name,
          email: email,
          phone: `${selectedCountry.code}${phoneNumber}`,
          shipping_address:
            method === "delivery"
              ? {
                  address: streetAddress,
                  city: city,
                  postal_code: postalCode,
                  // Midtrans strictly requires an ISO 3166-1 alpha-3 code (e.g. "IDN")
                  country_code: deliveryCountryCode,
                  province: province,
                }
              : undefined,
        },
        itemDetails: items.map((item) => ({
          id: item.id,
          price: item.price,
          quantity: item.quantity,
          name: item.title.substring(0, 50),
        })),
      };

      const response = await fetch("/api/midtrans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.token) {
        throw new Error(data.error || t.errors.serverError);
      }

      // @ts-ignore - Ignore TS error for window.snap injected by script
      window.snap.pay(data.token, {
        onSuccess: function (result: any) {
          console.log("Payment success:", result);
          onClose();
        },
        onPending: function (result: any) {
          console.log("Payment pending:", result);
          onClose();
        },
        onError: function (result: any) {
          console.error("Payment error:", result);
          setApiError(t.errors.serverError);
        },
        onClose: function () {
          console.log("Customer closed the popup without paying");
        },
      });
    } catch (error: any) {
      console.error("Checkout error:", error);
      setApiError(error?.message || t.errors.serverError);
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Centered Spacious Modal Box */}
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white text-black shadow-2xl flex flex-col z-10 overflow-y-auto overflow-x-hidden animate-scale-up">
        {/* Header */}
        <div className="sticky top-0 bg-white z-20 flex items-center justify-between px-8 py-6 border-b border-black/10 shrink-0">
          <h2 className="text-xl font-bold tracking-wider uppercase">{t.title}</h2>
          <button
            onClick={onClose}
            className="cursor-pointer text-black/40 hover:text-black transition-colors p-1"
            aria-label="Close modal"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="1.5" fill="none">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Body Content */}
        <div className="px-8 py-8 space-y-10">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4 text-black/50">
              <p className="text-base">{t.empty}</p>
              <button
                onClick={onClose}
                className="cursor-pointer underline uppercase tracking-widest text-xs hover:text-black transition-colors"
              >
                {t.continue}
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items List */}
              <div className="space-y-6">
                {items.map((item) => {
                  const isPending = !!pendingDeletions[item.id];
                  if (isPending) {
                    const pending = pendingDeletions[item.id];
                    const circumference = 2 * Math.PI * 10;
                    const strokeDashoffset = circumference * pending.progress;

                    return (
                      <div
                        key={item.id}
                        className="py-4 border-b border-t border-black/10 flex items-center justify-between text-sm text-[#7b7b7b] animate-fade-in"
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative w-6 h-6 flex items-center justify-center text-[#ff5722] font-light text-xs shrink-0">
                            <svg
                              className="absolute inset-0 w-full h-full pointer-events-none"
                              style={{
                                transform: "rotate(90deg) scaleX(-1)",
                              }}
                              viewBox="0 0 24 24"
                            >
                              <circle
                                cx="12"
                                cy="12"
                                r="10"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                className="text-[#ffccbc] opacity-50"
                              />
                              <circle
                                cx="12"
                                cy="12"
                                r="10"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                              />
                            </svg>
                            <span className="relative z-10 tabular-nums">{pending.timeLeft}</span>
                          </div>
                          <span>
                            {t.undoText} &ldquo;{item.title}&rdquo;
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleUndo(item.id)}
                          className="cursor-pointer hover:text-black transition-colors"
                        >
                          {t.undoAction}
                        </button>
                      </div>
                    );
                  }

                  return (
                    <div key={item.id} className="flex gap-6 relative pb-6 border-b border-black/10 items-center">
                      <div className="h-24 w-24 bg-neutral-100 shrink-0 flex items-center justify-center overflow-hidden">
                        {item.image ? (
                          <img src={item.image} alt={item.title} className="object-cover h-full w-full" />
                        ) : (
                          <span className="text-xs text-black/40">No photo</span>
                        )}
                      </div>
                      <div className="flex flex-col justify-center flex-1 pr-8">
                        <span className="text-base font-semibold">{item.title}</span>
                        {item.size && (
                          <span className="text-xs text-black/60 uppercase tracking-wider mt-1">
                            Size: {item.size}
                          </span>
                        )}
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-black/20 rounded-md">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="px-3 py-1 text-sm text-black/60 hover:text-black cursor-pointer"
                            >
                              −
                            </button>
                            <span className="px-3 text-sm font-medium">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 text-sm text-black/60 hover:text-black cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                          <span className="text-base tabular-nums font-bold">
                            Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteClick(item)}
                        className="absolute top-0 right-0 text-black/30 hover:text-red-600 text-lg cursor-pointer p-1"
                        title="Remove item"
                      >
                        ✕
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Subtotal */}
              <div className="flex justify-between items-center pt-2">
                <span className="text-base font-bold uppercase tracking-wider">{t.total}</span>
                <span className="text-2xl font-semibold tabular-nums">
                  Rp {total.toLocaleString("id-ID")}
                </span>
              </div>

              {/* Checkout Form */}
              <form
                id="checkout-modal-form"
                noValidate
                onSubmit={handleSubmit}
                className="space-y-8 pt-6 border-t border-black/10"
              >
                <h3 className="text-xs font-bold tracking-widest uppercase text-black/60">{t.checkout}</h3>

                {/* API / Server Level Error Banner */}
                {apiError && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-600 text-xs font-medium rounded-md animate-fade-in">
                    {apiError}
                  </div>
                )}

                <div className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <input
                      type="text"
                      placeholder={t.name}
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        clearError("name");
                      }}
                      className={`w-full border-b pb-3 text-sm focus:outline-none transition-colors bg-transparent placeholder:text-black/40 ${
                        errors.name ? "border-red-500 focus:border-red-500" : "border-black/20 focus:border-black"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500 mt-1.5 block font-medium">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <input
                      type="email"
                      placeholder={t.email}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        clearError("email");
                      }}
                      className={`w-full border-b pb-3 text-sm focus:outline-none transition-colors bg-transparent placeholder:text-black/40 ${
                        errors.email ? "border-red-500 focus:border-red-500" : "border-black/20 focus:border-black"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 mt-1.5 block font-medium">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone Number Input */}
                  <div className="relative" ref={dropdownRef}>
                    <div
                      className={`flex items-center border-b pb-3 text-sm transition-colors ${
                        errors.phone ? "border-red-500" : "focus-within:border-black border-black/20"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setIsCountryOpen(!isCountryOpen)}
                        className="flex items-center gap-2 pr-3 border-r border-black/10 shrink-0 text-black/80 hover:text-black cursor-pointer"
                      >
                        <span className="text-lg">{selectedCountry.flag}</span>
                        <span className="font-medium">{selectedCountry.code}</span>
                        <span className="text-xs text-black/40">▼</span>
                      </button>
                      <input
                        type="tel"
                        placeholder="(000) 000-00-00"
                        value={phoneNumber}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                          clearError("phone");
                        }}
                        className="w-full pl-3 focus:outline-none bg-transparent placeholder:text-black/40"
                      />
                    </div>
                    {errors.phone && (
                      <span className="text-xs text-red-500 mt-1.5 block font-medium">
                        {errors.phone}
                      </span>
                    )}

                    {/* Country Selector Dropdown */}
                    {isCountryOpen && (
                      <div className="absolute left-0 top-full mt-1 w-72 max-h-60 overflow-y-auto bg-white border border-black/15 shadow-xl z-30 rounded-md">
                        {filteredCountries.map((c) => (
                          <div
                            key={c.code + c.name}
                            id={`country-option-${c.code}-${c.name}`}
                            onClick={() => {
                              setSelectedCountry(c);
                              setIsCountryOpen(false);
                            }}
                            className={`flex items-center justify-between px-3 py-2.5 text-xs cursor-pointer hover:bg-neutral-100 transition-colors ${
                              selectedCountry.code === c.code && selectedCountry.name === c.name
                                ? "bg-neutral-100 font-semibold"
                                : ""
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <span>{c.flag}</span>
                              <span>{c.name}</span>
                            </span>
                            <span className="text-black/50">{c.code}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Delivery Method Toggle */}
                  <div className="space-y-3 pt-2">
                    <label className="text-xs font-semibold text-black/60 uppercase tracking-widest block">
                      {t.method}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setMethod("pickup");
                          setErrors({});
                        }}
                        className={`cursor-pointer py-3.5 px-4 text-xs font-semibold tracking-wider uppercase border transition-all text-center ${
                          method === "pickup"
                            ? "border-2 border-black bg-neutral-100 text-black shadow-xs"
                            : "border-black/20 hover:border-black text-black/70 bg-white"
                        }`}
                      >
                        {t.pickup}
                      </button>
                      <button
                        type="button"
                        onClick={() => setMethod("delivery")}
                        className={`cursor-pointer py-3.5 px-4 text-xs font-semibold tracking-wider uppercase border transition-all text-center ${
                          method === "delivery"
                            ? "border-2 border-black bg-neutral-100 text-black shadow-xs"
                            : "border-black/20 hover:border-black text-black/70 bg-white"
                        }`}
                      >
                        {t.delivery}
                      </button>
                    </div>
                  </div>

                  {/* Conditional Method Info / Full Structured Address Form */}
                  {method === "pickup" ? (
                    <div className="p-5 bg-neutral-50 border border-black/10 text-xs text-black/70 space-y-2 leading-relaxed">
                      <p className="font-semibold text-black uppercase tracking-wider">{t.pickupLocationTitle}</p>
                      <p>{t.pickupAddress}</p>
                      <p className="pt-1">
                        <a
                          href={t.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline font-medium hover:text-black transition-colors"
                          style={{ color: "#45cbad" }}
                        >
                          {t.mapLinkText} →
                        </a>
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-5 pt-2 animate-fade-in">
                      <label className="text-xs font-semibold text-black/60 uppercase tracking-widest block">
                        {t.addressTitle}
                      </label>

                      {/* Street Address */}
                      <div>
                        <input
                          type="text"
                          placeholder={t.streetAddress}
                          value={streetAddress}
                          onChange={(e) => {
                            setStreetAddress(e.target.value);
                            clearError("streetAddress");
                          }}
                          className={`w-full border-b pb-3 text-sm focus:outline-none transition-colors bg-transparent placeholder:text-black/40 ${
                            errors.streetAddress
                              ? "border-red-500 focus:border-red-500"
                              : "border-black/20 focus:border-black"
                          }`}
                        />
                        {errors.streetAddress && (
                          <span className="text-xs text-red-500 mt-1.5 block font-medium">
                            {errors.streetAddress}
                          </span>
                        )}
                      </div>

                      {/* City */}
                      <div>
                        <input
                          type="text"
                          placeholder={t.city}
                          value={city}
                          onChange={(e) => {
                            setCity(e.target.value);
                            clearError("city");
                          }}
                          className={`w-full border-b pb-3 text-sm focus:outline-none transition-colors bg-transparent placeholder:text-black/40 ${
                            errors.city
                              ? "border-red-500 focus:border-red-500"
                              : "border-black/20 focus:border-black"
                          }`}
                        />
                        {errors.city && (
                          <span className="text-xs text-red-500 mt-1.5 block font-medium">
                            {errors.city}
                          </span>
                        )}
                      </div>

                      {/* Province / State */}
                      <div>
                        <input
                          type="text"
                          placeholder={t.province}
                          value={province}
                          onChange={(e) => {
                            setProvince(e.target.value);
                            clearError("province");
                          }}
                          className={`w-full border-b pb-3 text-sm focus:outline-none transition-colors bg-transparent placeholder:text-black/40 ${
                            errors.province
                              ? "border-red-500 focus:border-red-500"
                              : "border-black/20 focus:border-black"
                          }`}
                        />
                        {errors.province && (
                          <span className="text-xs text-red-500 mt-1.5 block font-medium">
                            {errors.province}
                          </span>
                        )}
                      </div>

                      {/* Postal Code */}
                      <div>
                        <input
                          type="text"
                          placeholder={t.postalCode}
                          value={postalCode}
                          onChange={(e) => {
                            setPostalCode(e.target.value);
                            clearError("postalCode");
                          }}
                          className={`w-full border-b pb-3 text-sm focus:outline-none transition-colors bg-transparent placeholder:text-black/40 ${
                            errors.postalCode
                              ? "border-red-500 focus:border-red-500"
                              : "border-black/20 focus:border-black"
                          }`}
                        />
                        {errors.postalCode && (
                          <span className="text-xs text-red-500 mt-1.5 block font-medium">
                            {errors.postalCode}
                          </span>
                        )}
                      </div>

                      {/* Country Select (ISO 3166-1 Alpha-3 Format Required by Midtrans) */}
                      <div>
                        <select
                          value={deliveryCountryCode}
                          onChange={(e) => {
                            setDeliveryCountryCode(e.target.value);
                            clearError("deliveryCountry");
                          }}
                          className={`w-full border-b pb-3 text-sm focus:outline-none transition-colors bg-transparent ${
                            errors.deliveryCountry
                              ? "border-red-500 focus:border-red-500"
                              : "border-black/20 focus:border-black"
                          }`}
                        >
                          <option value="" disabled>
                            {t.country}
                          </option>
                          {COUNTRIES.map((c) => (
                            <option key={c.alpha3} value={c.alpha3}>
                              {c.flag} {c.name}
                            </option>
                          ))}
                        </select>
                        {errors.deliveryCountry && (
                          <span className="text-xs text-red-500 mt-1.5 block font-medium">
                            {errors.deliveryCountry}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

              

                {/* Action Button */}
                <div className="pt-6 pb-4 space-y-5 border-t border-black/10">
<button
  type="submit"
  disabled={isProcessing}
  className="w-full text-white py-4 text-xs font-bold uppercase tracking-widest transition-opacity hover:opacity-90 cursor-pointer shadow-md rounded-none flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
  style={{ backgroundColor: "#45cbad" }}
>
  {isProcessing ? t.processing || "PROCESSING..." : t.placeOrder}
</button>

<div className="text-xs text-center text-black/50 leading-relaxed px-2">
  {t.privacyTextBefore}
  <a href="/pages/privacy" className="underline hover:text-black transition-colors" style={{ color: "#45cbad" }}>
    {t.privacyLink}
  </a>
</div>
</div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

