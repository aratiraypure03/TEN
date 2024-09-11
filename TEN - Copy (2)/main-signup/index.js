function openSidebar(id, cover) {
  if (id === 'sidebar-1') {
    document.getElementById(id).style.width = 'fit-content';
  }
  document.getElementById(id).classList.toggle('active');
  document.getElementById(cover).classList.toggle('active');

  document.getElementById(cover).addEventListener('click', () => {

    if (document.getElementById(id).classList.contains('active')) {
      if (id === 'sidebar-1') {
        document.getElementById(id).style.width = '0px';
      }
      else if (id.includes('small-sidebar')) {
        const new_id = id.split(id)[1] || '';
        document.getElementById('sidebar').classList.remove('active');
        document.getElementById('cover').classList.remove('active');
        document.getElementById(id).classList.remove('active');
        document.getElementById('small-cover').classList.remove('active');
      }
      else if (id.includes('mini-sidebar')) {
        document.getElementById('sidebar').classList.remove('active');
        document.getElementById('cover').classList.remove('active');
        document.getElementById('small-sidebar0').classList.remove('active');
        document.getElementById('small-cover').classList.remove('active');
        document.getElementById(id).classList.remove('active');
        document.getElementById('mini-cover').classList.remove('active');
      }
      document.getElementById(id).classList.remove('active');
      document.getElementById(cover).classList.remove('active');
    }
  });
}


function closeSidebar(id, cover) {
  if (id === 'sidebar-1') {
    document.getElementById(id).style.width = '0px';
  }
  document.getElementById(id).classList.remove('active');
  document.getElementById(cover).classList.remove('active');

}

function openSecondBar(id_1, id_2, id_3, id_4) {
  document.getElementById(id_1).style.display = 'block';
  document.getElementById(id_2).style.display = 'none';
  document.getElementById(id_3).style.display = 'none';
  document.getElementById(id_4).style.display = 'none';
}

function bothOpenClose() {
  openSidebar('sidebar-1', 'content-cover');
  closeSecondbar();
}
function closeSecondbar() {
  document.getElementById('mini-sidebar-1').style.display = 'none';
  document.getElementById('mini-sidebar-2').style.display = 'none';
  document.getElementById('mini-sidebar-3').style.display = 'none';
  document.getElementById('mini-sidebar-4').style.display = 'none';
}

function closeBothSidebar(sidebar, small_sidebar) {
  document.getElementById(sidebar).classList.remove('active');
  document.getElementById('cover').classList.remove('active');
  document.getElementById(small_sidebar).classList.remove('active');
  document.getElementById('small-cover').classList.remove('active');

}
function closeThreeSidebar(sidebar, small_sidebar, mini_sidebar) {
  document.getElementById(sidebar).classList.remove('active');
  document.getElementById('cover').classList.remove('active');
  document.getElementById(small_sidebar).classList.remove('active');
  document.getElementById('small-cover').classList.remove('active');
  document.getElementById(mini_sidebar).classList.remove('active');
  document.getElementById('mini-cover').classList.remove('active');

}

function moveCursor(cursorId, event) {
  const cursor = document.getElementById(cursorId);
  cursor.style.left = event.clientX + 'px';
  cursor.style.top = event.clientY + 'px';
}

document.addEventListener('mousemove', function (e) {
  moveCursor('custom-cursor-1', e);
  moveCursor('custom-cursor-2', e);
  moveCursor('custom-cursor-3', e);
  moveCursor('custom-cursor-4', e);
});


// 253 countries
const countries = [
  { name: "Afghanistan", code: "AF", phone: 93 },
  { name: "Aland Islands", code: "AX", phone: 358 },
  { name: "Albania", code: "AL", phone: 355 },
  { name: "Algeria", code: "DZ", phone: 213 },
  { name: "American Samoa", code: "AS", phone: 1684 },
  { name: "Andorra", code: "AD", phone: 376 },
  { name: "Angola", code: "AO", phone: 244 },
  { name: "Anguilla", code: "AI", phone: 1264 },
  { name: "Antarctica", code: "AQ", phone: 672 },
  { name: "Antigua and Barbuda", code: "AG", phone: 1268 },
  { name: "Argentina", code: "AR", phone: 54 },
  { name: "Armenia", code: "AM", phone: 374 },
  { name: "Aruba", code: "AW", phone: 297 },
  { name: "Australia", code: "AU", phone: 61 },
  { name: "Austria", code: "AT", phone: 43 },
  { name: "Azerbaijan", code: "AZ", phone: 994 },
  { name: "Bahamas", code: "BS", phone: 1242 },
  { name: "Bahrain", code: "BH", phone: 973 },
  { name: "Bangladesh", code: "BD", phone: 880 },
  { name: "Barbados", code: "BB", phone: 1246 },
  { name: "Belarus", code: "BY", phone: 375 },
  { name: "Belgium", code: "BE", phone: 32 },
  { name: "Belize", code: "BZ", phone: 501 },
  { name: "Benin", code: "BJ", phone: 229 },
  { name: "Bermuda", code: "BM", phone: 1441 },
  { name: "Bhutan", code: "BT", phone: 975 },
  { name: "Bolivia", code: "BO", phone: 591 },
  { name: "Bonaire, Sint Eustatius and Saba", code: "BQ", phone: 599 },
  { name: "Bosnia and Herzegovina", code: "BA", phone: 387 },
  { name: "Botswana", code: "BW", phone: 267 },
  { name: "Bouvet Island", code: "BV", phone: 55 },
  { name: "Brazil", code: "BR", phone: 55 },
  { name: "British Indian Ocean Territory", code: "IO", phone: 246 },
  { name: "Brunei Darussalam", code: "BN", phone: 673 },
  { name: "Bulgaria", code: "BG", phone: 359 },
  { name: "Burkina Faso", code: "BF", phone: 226 },
  { name: "Burundi", code: "BI", phone: 257 },
  { name: "Cambodia", code: "KH", phone: 855 },
  { name: "Cameroon", code: "CM", phone: 237 },
  { name: "Canada", code: "CA", phone: 1 },
  { name: "Cape Verde", code: "CV", phone: 238 },
  { name: "Cayman Islands", code: "KY", phone: 1345 },
  { name: "Central African Republic", code: "CF", phone: 236 },
  { name: "Chad", code: "TD", phone: 235 },
  { name: "Chile", code: "CL", phone: 56 },
  { name: "China", code: "CN", phone: 86 },
  { name: "Christmas Island", code: "CX", phone: 61 },
  { name: "Cocos (Keeling) Islands", code: "CC", phone: 672 },
  { name: "Colombia", code: "CO", phone: 57 },
  { name: "Comoros", code: "KM", phone: 269 },
  { name: "Congo", code: "CG", phone: 242 },
  { name: "Congo, Democratic Republic of the Congo", code: "CD", phone: 242 },
  { name: "Cook Islands", code: "CK", phone: 682 },
  { name: "Costa Rica", code: "CR", phone: 506 },
  { name: "Cote D'Ivoire", code: "CI", phone: 225 },
  { name: "Croatia", code: "HR", phone: 385 },
  { name: "Cuba", code: "CU", phone: 53 },
  { name: "Curacao", code: "CW", phone: 599 },
  { name: "Cyprus", code: "CY", phone: 357 },
  { name: "Czech Republic", code: "CZ", phone: 420 },
  { name: "Denmark", code: "DK", phone: 45 },
  { name: "Djibouti", code: "DJ", phone: 253 },
  { name: "Dominica", code: "DM", phone: 1767 },
  { name: "Dominican Republic", code: "DO", phone: 1809 },
  { name: "Ecuador", code: "EC", phone: 593 },
  { name: "Egypt", code: "EG", phone: 20 },
  { name: "El Salvador", code: "SV", phone: 503 },
  { name: "Equatorial Guinea", code: "GQ", phone: 240 },
  { name: "Eritrea", code: "ER", phone: 291 },
  { name: "Estonia", code: "EE", phone: 372 },
  { name: "Ethiopia", code: "ET", phone: 251 },
  { name: "Falkland Islands (Malvinas)", code: "FK", phone: 500 },
  { name: "Faroe Islands", code: "FO", phone: 298 },
  { name: "Fiji", code: "FJ", phone: 679 },
  { name: "Finland", code: "FI", phone: 358 },
  { name: "France", code: "FR", phone: 33 },
  { name: "French Guiana", code: "GF", phone: 594 },
  { name: "French Polynesia", code: "PF", phone: 689 },
  { name: "French Southern Territories", code: "TF", phone: 262 },
  { name: "Gabon", code: "GA", phone: 241 },
  { name: "Gambia", code: "GM", phone: 220 },
  { name: "Georgia", code: "GE", phone: 995 },
  { name: "Germany", code: "DE", phone: 49 },
  { name: "Ghana", code: "GH", phone: 233 },
  { name: "Gibraltar", code: "GI", phone: 350 },
  { name: "Greece", code: "GR", phone: 30 },
  { name: "Greenland", code: "GL", phone: 299 },
  { name: "Grenada", code: "GD", phone: 1473 },
  { name: "Guadeloupe", code: "GP", phone: 590 },
  { name: "Guam", code: "GU", phone: 1671 },
  { name: "Guatemala", code: "GT", phone: 502 },
  { name: "Guernsey", code: "GG", phone: 44 },
  { name: "Guinea", code: "GN", phone: 224 },
  { name: "Guinea-Bissau", code: "GW", phone: 245 },
  { name: "Guyana", code: "GY", phone: 592 },
  { name: "Haiti", code: "HT", phone: 509 },
  { name: "Heard Island and McDonald Islands", code: "HM", phone: 0 },
  { name: "Holy See (Vatican City State)", code: "VA", phone: 39 },
  { name: "Honduras", code: "HN", phone: 504 },
  { name: "Hong Kong", code: "HK", phone: 852 },
  { name: "Hungary", code: "HU", phone: 36 },
  { name: "Iceland", code: "IS", phone: 354 },
  { name: "India", code: "IN", phone: 91 },
  { name: "Indonesia", code: "ID", phone: 62 },
  { name: "Iran, Islamic Republic of", code: "IR", phone: 98 },
  { name: "Iraq", code: "IQ", phone: 964 },
  { name: "Ireland", code: "IE", phone: 353 },
  { name: "Isle of Man", code: "IM", phone: 44 },
  { name: "Israel", code: "IL", phone: 972 },
  { name: "Italy", code: "IT", phone: 39 },
  { name: "Jamaica", code: "JM", phone: 1876 },
  { name: "Japan", code: "JP", phone: 81 },
  { name: "Jersey", code: "JE", phone: 44 },
  { name: "Jordan", code: "JO", phone: 962 },
  { name: "Kazakhstan", code: "KZ", phone: 7 },
  { name: "Kenya", code: "KE", phone: 254 },
  { name: "Kiribati", code: "KI", phone: 686 },
  { name: "Korea, Democratic People's Republic of", code: "KP", phone: 850 },
  { name: "Korea, Republic of", code: "KR", phone: 82 },
  { name: "Kosovo", code: "XK", phone: 383 },
  { name: "Kuwait", code: "KW", phone: 965 },
  { name: "Kyrgyzstan", code: "KG", phone: 996 },
  { name: "Lao People's Democratic Republic", code: "LA", phone: 856 },
  { name: "Latvia", code: "LV", phone: 371 },
  { name: "Lebanon", code: "LB", phone: 961 },
  { name: "Lesotho", code: "LS", phone: 266 },
  { name: "Liberia", code: "LR", phone: 231 },
  { name: "Libyan Arab Jamahiriya", code: "LY", phone: 218 },
  { name: "Liechtenstein", code: "LI", phone: 423 },
  { name: "Lithuania", code: "LT", phone: 370 },
  { name: "Luxembourg", code: "LU", phone: 352 },
  { name: "Macao", code: "MO", phone: 853 },
  { name: "Macedonia, the Former Yugoslav Republic of", code: "MK", phone: 389 },
  { name: "Madagascar", code: "MG", phone: 261 },
  { name: "Malawi", code: "MW", phone: 265 },
  { name: "Malaysia", code: "MY", phone: 60 },
  { name: "Maldives", code: "MV", phone: 960 },
  { name: "Mali", code: "ML", phone: 223 },
  { name: "Malta", code: "MT", phone: 356 },
  { name: "Marshall Islands", code: "MH", phone: 692 },
  { name: "Martinique", code: "MQ", phone: 596 },
  { name: "Mauritania", code: "MR", phone: 222 },
  { name: "Mauritius", code: "MU", phone: 230 },
  { name: "Mayotte", code: "YT", phone: 262 },
  { name: "Mexico", code: "MX", phone: 52 },
  { name: "Micronesia, Federated States of", code: "FM", phone: 691 },
  { name: "Moldova, Republic of", code: "MD", phone: 373 },
  { name: "Monaco", code: "MC", phone: 377 },
  { name: "Mongolia", code: "MN", phone: 976 },
  { name: "Montenegro", code: "ME", phone: 382 },
  { name: "Montserrat", code: "MS", phone: 1664 },
  { name: "Morocco", code: "MA", phone: 212 },
  { name: "Mozambique", code: "MZ", phone: 258 },
  { name: "Myanmar", code: "MM", phone: 95 },
  { name: "Namibia", code: "NA", phone: 264 },
  { name: "Nauru", code: "NR", phone: 674 },
  { name: "Nepal", code: "NP", phone: 977 },
  { name: "Netherlands", code: "NL", phone: 31 },
  { name: "Netherlands Antilles", code: "AN", phone: 599 },
  { name: "New Caledonia", code: "NC", phone: 687 },
  { name: "New Zealand", code: "NZ", phone: 64 },
  { name: "Nicaragua", code: "NI", phone: 505 },
  { name: "Niger", code: "NE", phone: 227 },
  { name: "Nigeria", code: "NG", phone: 234 },
  { name: "Niue", code: "NU", phone: 683 },
  { name: "Norfolk Island", code: "NF", phone: 672 },
  { name: "Northern Mariana Islands", code: "MP", phone: 1670 },
  { name: "Norway", code: "NO", phone: 47 },
  { name: "Oman", code: "OM", phone: 968 },
  { name: "Pakistan", code: "PK", phone: 92 },
  { name: "Palau", code: "PW", phone: 680 },
  { name: "Palestinian Territory, Occupied", code: "PS", phone: 970 },
  { name: "Panama", code: "PA", phone: 507 },
  { name: "Papua New Guinea", code: "PG", phone: 675 },
  { name: "Paraguay", code: "PY", phone: 595 },
  { name: "Peru", code: "PE", phone: 51 },
  { name: "Philippines", code: "PH", phone: 63 },
  { name: "Pitcairn", code: "PN", phone: 64 },
  { name: "Poland", code: "PL", phone: 48 },
  { name: "Portugal", code: "PT", phone: 351 },
  { name: "Puerto Rico", code: "PR", phone: 1787 },
  { name: "Qatar", code: "QA", phone: 974 },
  { name: "Reunion", code: "RE", phone: 262 },
  { name: "Romania", code: "RO", phone: 40 },
  { name: "Russian Federation", code: "RU", phone: 7 },
  { name: "Rwanda", code: "RW", phone: 250 },
  { name: "Saint Barthelemy", code: "BL", phone: 590 },
  { name: "Saint Helena", code: "SH", phone: 290 },
  { name: "Saint Kitts and Nevis", code: "KN", phone: 1869 },
  { name: "Saint Lucia", code: "LC", phone: 1758 },
  { name: "Saint Martin", code: "MF", phone: 590 },
  { name: "Saint Pierre and Miquelon", code: "PM", phone: 508 },
  { name: "Saint Vincent and the Grenadines", code: "VC", phone: 1784 },
  { name: "Samoa", code: "WS", phone: 684 },
  { name: "San Marino", code: "SM", phone: 378 },
  { name: "Sao Tome and Principe", code: "ST", phone: 239 },
  { name: "Saudi Arabia", code: "SA", phone: 966 },
  { name: "Senegal", code: "SN", phone: 221 },
  { name: "Serbia", code: "RS", phone: 381 },
  { name: "Serbia and Montenegro", code: "CS", phone: 381 },
  { name: "Seychelles", code: "SC", phone: 248 },
  { name: "Sierra Leone", code: "SL", phone: 232 },
  { name: "Singapore", code: "SG", phone: 65 },
  { name: "St Martin", code: "SX", phone: 721 },
  { name: "Slovakia", code: "SK", phone: 421 },
  { name: "Slovenia", code: "SI", phone: 386 },
  { name: "Solomon Islands", code: "SB", phone: 677 },
  { name: "Somalia", code: "SO", phone: 252 },
  { name: "South Africa", code: "ZA", phone: 27 },
  { name: "South Georgia and the South Sandwich Islands", code: "GS", phone: 500 },
  { name: "South Sudan", code: "SS", phone: 211 },
  { name: "Spain", code: "ES", phone: 34 },
  { name: "Sri Lanka", code: "LK", phone: 94 },
  { name: "Sudan", code: "SD", phone: 249 },
  { name: "Suriname", code: "SR", phone: 597 },
  { name: "Svalbard and Jan Mayen", code: "SJ", phone: 47 },
  { name: "Swaziland", code: "SZ", phone: 268 },
  { name: "Sweden", code: "SE", phone: 46 },
  { name: "Switzerland", code: "CH", phone: 41 },
  { name: "Syrian Arab Republic", code: "SY", phone: 963 },
  { name: "Taiwan, Province of China", code: "TW", phone: 886 },
  { name: "Tajikistan", code: "TJ", phone: 992 },
  { name: "Tanzania, United Republic of", code: "TZ", phone: 255 },
  { name: "Thailand", code: "TH", phone: 66 },
  { name: "Timor-Leste", code: "TL", phone: 670 },
  { name: "Togo", code: "TG", phone: 228 },
  { name: "Tokelau", code: "TK", phone: 690 },
  { name: "Tonga", code: "TO", phone: 676 },
  { name: "Trinidad and Tobago", code: "TT", phone: 1868 },
  { name: "Tunisia", code: "TN", phone: 216 },
  { name: "Turkey", code: "TR", phone: 90 },
  { name: "Turkmenistan", code: "TM", phone: 7370 },
  { name: "Turks and Caicos Islands", code: "TC", phone: 1649 },
  { name: "Tuvalu", code: "TV", phone: 688 },
  { name: "Uganda", code: "UG", phone: 256 },
  { name: "Ukraine", code: "UA", phone: 380 },
  { name: "United Arab Emirates", code: "AE", phone: 971 },
  { name: "United Kingdom", code: "GB", phone: 44 },
  { name: "United States", code: "US", phone: 1 },
  { name: "United States Minor Outlying Islands", code: "UM", phone: 1 },
  { name: "Uruguay", code: "UY", phone: 598 },
  { name: "Uzbekistan", code: "UZ", phone: 998 },
  { name: "Vanuatu", code: "VU", phone: 678 },
  { name: "Venezuela", code: "VE", phone: 58 },
  { name: "Viet Nam", code: "VN", phone: 84 },
  { name: "Virgin Islands, British", code: "VG", phone: 1284 },
  { name: "Virgin Islands, U.s.", code: "VI", phone: 1340 },
  { name: "Wallis and Futuna", code: "WF", phone: 681 },
  { name: "Western Sahara", code: "EH", phone: 212 },
  { name: "Yemen", code: "YE", phone: 967 },
  { name: "Zambia", code: "ZM", phone: 260 },
  { name: "Zimbabwe", code: "ZW", phone: 263 }
],

  select_box = document.querySelector('.options'),
  search_box = document.querySelector('.search-box'),
  input_box = document.querySelector('input[type="tel"]'),
  selected_option = document.querySelector('.selected-option div');

let options = null;

for (country of countries) {
  const option = `
  <li class="option">
      <div>
          <span class="iconify" data-icon="flag:${country.code.toLowerCase()}-4x3"></span>
          <span class="country-name">${country.name}</span>
      </div>
      <strong>+${country.phone}</strong>
  </li> `;

  select_box.querySelector('ol').insertAdjacentHTML('beforeend', option);
  options = document.querySelectorAll('.option');
}

function selectOption() {
  console.log(this);
  const icon = this.querySelector('.iconify').cloneNode(true),
      phone_code = this.querySelector('strong').cloneNode(true);

  selected_option.innerHTML = '';
  selected_option.append(icon, phone_code);

  input_box.value = phone_code.innerText;

  select_box.classList.remove('active');
  selected_option.classList.remove('active');

  search_box.value = '';
  select_box.querySelectorAll('.hide').forEach(el => el.classList.remove('hide'));
}

function searchCountry() {
  let search_query = search_box.value.toLowerCase();
  for (option of options) {
      let is_matched = option.querySelector('.country-name').innerText.toLowerCase().includes(search_query);
      option.classList.toggle('hide', !is_matched)
  }
}


selected_option.addEventListener('click', () => {
  select_box.classList.toggle('active');
  selected_option.classList.toggle('active');
})

options.forEach(option => option.addEventListener('click', selectOption));
search_box.addEventListener('input', searchCountry);

document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Store the data in localStorage
  localStorage.setItem('username', username);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);

  alert('Signup successful! Data saved.');
  this.reset(); // Reset the form
});
var selectElement = document.getElementById('country');

// Sort the countries alphabetically
countries.sort();

// Iterate over the sorted countries and add them to the select element
for (var i = 0; i < countries.length; i++) {
  var option = document.createElement('option');
  option.value = countries[i];
  option.text = countries[i];
  selectElement.appendChild(option);
}

      const checkbox = document.getElementById('myCheckbox');
const billingAddressContainer = document.querySelector('.billing-address-container');

checkbox.addEventListener('change', function() {
  if (this.checked) {
      billingAddressContainer.classList.add('hidden');
  } else {
      billingAddressContainer.classList.remove('hidden');
  }
});



// Footer code

// Dropdown Countries List
const countries = [
  { img: 'https://cdn-icons-png.flaticon.com/512/206/206626.png', name: 'United State (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/206/206606.png', name: 'India (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/555/555473.png', name: 'Canada (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/555/555604.png', name: 'Afghanistan (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197604.png', name: 'Åland Islands (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197633.png', name: 'Albania (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197646.png', name: 'Algeria (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197599.png', name: 'Angola (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197573.png', name: 'Argentina (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197561.png', name: 'Aruba (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197507.png', name: 'Australia (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197598.png', name: 'Austria (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197621.png', name: 'Bangladesh (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197593.png', name: 'Belgium (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197563.png', name: 'Belize (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197613.png', name: 'Benin (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197627.png', name: 'Bhutan (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197606.png', name: 'Brazil (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197601.png', name: 'China (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197605.png', name: 'Chile (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197580.png', name: 'Denmark (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197603.png', name: 'Ecuador (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197598.png', name: 'Egypt (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197619.png', name: 'Estonia (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197578.png', name: 'Iceland (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197587.png', name: 'Indonesia (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197618.png', name: 'Iraq (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197590.png', name: 'Italy (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197586.png', name: 'Jordan (INR ₹)' },
  { img: 'https://cdn-icons-png.flaticon.com/512/197/197601.png', name: 'Kuwait (INR ₹)' }
];

// email authentication
var emailInput = document.getElementById('email-field');
var emailLabel = document.getElementById('Email-label');
var emailError = document.getElementById('email-error');

function validateEmail() {
  emailLabel.style.bottom = '45px';
  emailLabel.style.fontSize = '12px';

  if (
    !emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
  ) {
    emailError.innerHTML = 'Please enter a valid email';
    return false;
  }
  emailError.innerHTML = '';
  return true;
}

// Padmini Code Dropdown

document.getElementById('select-list-data').addEventListener('click', function(event) {
  event.preventDefault(); 
  dropDown.classList.toggle('show');
});

countries.forEach(country => {
  const optionDiv = document.createElement('div');
  optionDiv.className = 'listOption';
  optionDiv.innerHTML = `
      <img src="${country.img}" />
      <span>${country.name}</span>
  `;
  dropDown.appendChild(optionDiv);
});

dropDown.addEventListener('click', function(e) {
  if (e.target.closest('.listOption')) {
      const selectedCountry = e.target.closest('.listOption').querySelector('span').textContent;
      const selectedImage = e.target.closest('.listOption').querySelector('img').src;

      document.getElementById('dropDown-country-name').textContent = selectedCountry;
      document.getElementById('dropDown-image').src = selectedImage;

      dropDown.classList.remove('show'); 
  }
});

document.addEventListener('click', function(event) {
  if (!event.target.closest('#select-list-data') && !event.target.closest('#dropDown')) {
      dropDown.classList.remove('show'); 
  }
});




