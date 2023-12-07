let category = "";
let search = "";

// Create a function to replace placeholders in the template with data
function renderTemplate(template, data) {
    for (var key in data) {
        template = template.replace('{{' + key + '}}', data[key]);
    }

    return template;
}

// ---------------------------------------------

var menu_template = document.getElementById('menu-template').textContent;

var categories_html = "";
for (var c of categories) {
    var data = { category: c.name };
    categories_html += renderTemplate(menu_template, data);
}

document.getElementById('menu').innerHTML += categories_html;

// ---------------------------------------------

function searchMatching(place) {
    if (place.name.toLowerCase().includes(search.toLowerCase()))
        return true;

    if (place.description.toLowerCase().includes(search.toLowerCase()))
        return true;

    return false;
}

// We are replacing the search match in the original string by wrapping the match in a <span> tag
function caseInsensitiveReplace(originalString, searchString) {
    // Create a regular expression with 'i' flag for case-insensitive search
    let regex = new RegExp(searchString, 'gi');
  
    // Replace the matches with the wrapped <span>
    let replacedString = originalString.replace(regex, (match) => {
      return `<span class="highlight">${match}</span>`;
    });
  
    return replacedString;
}

function listPlaces() {
    var places_template = document.getElementById('place-template').textContent;

    var places_html = "";
    for (const place of places) {

        let isVisible = (
            place.category == category &&
            searchMatching(place)
        );

        if (isVisible) {
           
            // We make a copy of the place object because we will possibly change its content
            // on the next iteration / search, we want to start again with the original place object
            let placeCopy = { ...place };

            // Only do the search highlight when the search string is more than 3 chars in length
            if (search.length > 3) {
                placeCopy.name = caseInsensitiveReplace(placeCopy.name, search);            
                placeCopy.description = caseInsensitiveReplace(placeCopy.description, search);            
            }

            places_html += renderTemplate(places_template, placeCopy);
        }
    }

    document.getElementById('places').innerHTML = places_html;

    // Find the corresponding description
    let categoryDescription = null;
    for (const c of categories) {
        if (c.name == category && c.description) {
            categoryDescription = c.description;        
            break;
        }
    }

    // turning on/off description
    let descriptionElement = document.getElementById('category-description');
    
    if (categoryDescription) {
        descriptionElement.innerHTML = categoryDescription;
        descriptionElement.style.display = 'block';
    } else {
        descriptionElement.style.display = 'none';
    }

}

listPlaces();

// ---------------------------------------------

var searchInput = document.getElementById('search');

function searchModified(event) {
    search = searchInput.value;
    listPlaces();
}

searchInput.addEventListener('keyup', searchModified);


// ---------------------------------------------

var category_menus = document.querySelectorAll('.category-menu');

function categoryMenuClick(event) {

    // Remove the active class from all the menuitems
    for (const menu of category_menus) {
        menu.classList.remove('active');
    }

    // We find out which menuitem we clicked on
    let menuItem = event.target;

    // Add active class to the clicked menuitem
    menuItem.classList.add("active");

    // set our global "category" variable to the content of that clicked link
    category = menuItem.innerHTML;

    searchInput.value = '';
    search = '';

    // render all the places now that we have the selected category
    listPlaces();

    return false; // prevent default anchor click behaviour
}

for (const menu of category_menus) {
    menu.addEventListener('click', categoryMenuClick);
}