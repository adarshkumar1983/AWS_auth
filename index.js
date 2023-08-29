/**
 * @Author: Your name
 * @Date:   2023-08-28 13:34:52
 * @Last Modified by:   Your name
 * @Last Modified time: 2023-08-28 20:11:44
 */
//const accessToken = 'eyJraWQiOiJmSjBSdFBUUjBlY1dVNmwyNkN5UHJNaXFkNk1HakMxVVh5VCtjXC9OTk0wZz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiUVU1d3k0LXMzSzZZTWN4dnA4alNRUSIsInN1YiI6ImYwOTYyNzQzLTg2NjItNGRjMi05N2JkLTVjN2VlMmY2ZDdhYyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xXzJ1bERtNzlZRCIsImNvZ25pdG86dXNlcm5hbWUiOiJ1c2VyMTIzIiwiYXVkIjoiNzBiNWV0djJxdnU5ZXR2NHFtdDllMDZmcTEiLCJldmVudF9pZCI6IjBiZDlmMjU0LTBiYjgtNGZiMC1hZWVmLTdjZGM4ZmZlNzgwOCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjkzMjE0NzE4LCJleHAiOjE2OTMyMTgzMTgsImlhdCI6MTY5MzIxNDcxOCwianRpIjoiNDQ4ZmIyYWYtNzk5Yy00ODZmLTgxNmItYTExNmZlOWIwYTkxIiwiZW1haWwiOiJhZGFyc2hyYWpwdXQxOTE0QGdtYWlsLmNvbSJ9.2JJpxQP_7Wk3FwHXWAUH8geCR-y6FMaLydTotNzab50rsS8WpCXXaDlzt5apk1--n3JytEmtqHkOYjEE7Eon8J_m1uHIG7fSu0-JJI_vC7yi8oDHZCZDF67vC9NJx2enMby3NTK7vpeJ8E3QfjMPQLodl9GqGoFCe5UGmtL7or0QAx5QSJy1zfmahCZ6Eig_P3pDN9_gIitjXN0jQljPp5RRkLULkmPhfIoHJIMIq8h8-6TsyC1zLG3wg1TRFMD2SO-KMAbYMFFs6LR1ot-iVyimUM7lkwvfPat4hG0pGThpOnRbWS4QGYgF9_50PVyvCRNV8Vk3gWOyyUwfzQnLTg'; // Replace with the actual access token

  // Function to extract username from Cognito token
function extractUsernameFromToken(accessToken) {
    const tokenParts = accessToken.split('.');
    if (tokenParts.length !== 3) {
    return null;
    }
    const tokenPayload = JSON.parse(atob(tokenParts[1]));
    return tokenPayload['cognito:username']; // 'cognito:username' field contains the username
}

document.addEventListener('DOMContentLoaded', () => {
    const addItemForm = document.getElementById('addItemForm');

    addItemForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        //  const accessToken = 'eyJraWQiOiJmSjBSdFBUUjBlY1dVNmwyNkN5UHJNaXFkNk1HakMxVVh5VCtjXC9OTk0wZz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiUVU1d3k0LXMzSzZZTWN4dnA4alNRUSIsInN1YiI6ImYwOTYyNzQzLTg2NjItNGRjMi05N2JkLTVjN2VlMmY2ZDdhYyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xXzJ1bERtNzlZRCIsImNvZ25pdG86dXNlcm5hbWUiOiJ1c2VyMTIzIiwiYXVkIjoiNzBiNWV0djJxdnU5ZXR2NHFtdDllMDZmcTEiLCJldmVudF9pZCI6IjBiZDlmMjU0LTBiYjgtNGZiMC1hZWVmLTdjZGM4ZmZlNzgwOCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjkzMjE0NzE4LCJleHAiOjE2OTMyMTgzMTgsImlhdCI6MTY5MzIxNDcxOCwianRpIjoiNDQ4ZmIyYWYtNzk5Yy00ODZmLTgxNmItYTExNmZlOWIwYTkxIiwiZW1haWwiOiJhZGFyc2hyYWpwdXQxOTE0QGdtYWlsLmNvbSJ9.2JJpxQP_7Wk3FwHXWAUH8geCR-y6FMaLydTotNzab50rsS8WpCXXaDlzt5apk1--n3JytEmtqHkOYjEE7Eon8J_m1uHIG7fSu0-JJI_vC7yi8oDHZCZDF67vC9NJx2enMby3NTK7vpeJ8E3QfjMPQLodl9GqGoFCe5UGmtL7or0QAx5QSJy1zfmahCZ6Eig_P3pDN9_gIitjXN0jQljPp5RRkLULkmPhfIoHJIMIq8h8-6TsyC1zLG3wg1TRFMD2SO-KMAbYMFFs6LR1ot-iVyimUM7lkwvfPat4hG0pGThpOnRbWS4QGYgF9_50PVyvCRNV8Vk3gWOyyUwfzQnLTg'; // Replace with the actual access token
          const username = extractUsernameFromToken(accessToken); // Extract username from the token
        const description = addItemForm.elements.description.value;
        const item_name = addItemForm.elements.item_name.value;
        const item_type = addItemForm.elements.item_type.value;

        const payload = {
              user_id: username, // Use the extracted username as user_id
            description: description,
            item_name: item_name,
            item_type: item_type
        };

        try {
            const response = await fetch('https://29kasv5xog.execute-api.ap-south-1.amazonaws.com/dev/items', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(payload)
              });
  
              if (response.ok) {
                  const responseData = await response.json();
                  console.log('Item added successfully:', responseData); 
                  loadItems();
              } else {
                  console.error('Error adding item:', response.statusText);
              }
          } catch (error) {
              console.error('An error occurred:', error);
          }
      });
  });
  


async function loadItems() {
    //const accessToken = 'eyJraWQiOiJmSjBSdFBUUjBlY1dVNmwyNkN5UHJNaXFkNk1HakMxVVh5VCtjXC9OTk0wZz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiUVU1d3k0LXMzSzZZTWN4dnA4alNRUSIsInN1YiI6ImYwOTYyNzQzLTg2NjItNGRjMi05N2JkLTVjN2VlMmY2ZDdhYyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xXzJ1bERtNzlZRCIsImNvZ25pdG86dXNlcm5hbWUiOiJ1c2VyMTIzIiwiYXVkIjoiNzBiNWV0djJxdnU5ZXR2NHFtdDllMDZmcTEiLCJldmVudF9pZCI6IjBiZDlmMjU0LTBiYjgtNGZiMC1hZWVmLTdjZGM4ZmZlNzgwOCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjkzMjE0NzE4LCJleHAiOjE2OTMyMTgzMTgsImlhdCI6MTY5MzIxNDcxOCwianRpIjoiNDQ4ZmIyYWYtNzk5Yy00ODZmLTgxNmItYTExNmZlOWIwYTkxIiwiZW1haWwiOiJhZGFyc2hyYWpwdXQxOTE0QGdtYWlsLmNvbSJ9.2JJpxQP_7Wk3FwHXWAUH8geCR-y6FMaLydTotNzab50rsS8WpCXXaDlzt5apk1--n3JytEmtqHkOYjEE7Eon8J_m1uHIG7fSu0-JJI_vC7yi8oDHZCZDF67vC9NJx2enMby3NTK7vpeJ8E3QfjMPQLodl9GqGoFCe5UGmtL7or0QAx5QSJy1zfmahCZ6Eig_P3pDN9_gIitjXN0jQljPp5RRkLULkmPhfIoHJIMIq8h8-6TsyC1zLG3wg1TRFMD2SO-KMAbYMFFs6LR1ot-iVyimUM7lkwvfPat4hG0pGThpOnRbWS4QGYgF9_50PVyvCRNV8Vk3gWOyyUwfzQnLTg'; // Replace with the actual access token
    const user_id = extractUsernameFromToken(accessToken); // Assuming user_id is stored in the token

    try {
        const response = await fetch(`https://29kasv5xog.execute-api.ap-south-1.amazonaws.com/dev/items?user_id=${user_id}`);
        const responseData = await response.json();

        const itemsTable = document.getElementById('item-table');
        if (responseData.statusCode === 200) {
            const items = JSON.parse(responseData.body);

            if (items.length > 0) {
                itemsTable.innerHTML = `
                    <tr>
                        <th>Item Name</th>
                        <th>Description</th>
                        <th>Item Type</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                `;

                items.forEach(item => {
                    const row = document.createElement('tr');
                    row.className = 'table-row';

                    const itemNameCell = document.createElement('td');
                    itemNameCell.textContent = item.item_name;

                    const descriptionCell = document.createElement('td');
                    descriptionCell.textContent = item.description;

                    const itemTypeCell = document.createElement('td');
                    itemTypeCell.innerHTML = getItemIcon(item.item_type);

                    const deleteButtonCell = document.createElement('td');
                    const deleteButton = document.createElement('button');
                    deleteButton.className = 'delete-btn';
                    deleteButton.textContent = 'Delete';
                    deleteButton.addEventListener('click', () => {
                        deleteItem(item.item_name);
                    });
                    deleteButtonCell.appendChild(deleteButton);

                    const editButtonCell = document.createElement('td');
                    const editButton = document.createElement('button');
                    editButton.className = 'edit-btn';
                    editButton.textContent = 'Edit';
                    editButton.addEventListener('click', () => {
                        // Call edit function here
                    });
                    editButtonCell.appendChild(editButton);

                    row.appendChild(itemNameCell);
                    row.appendChild(descriptionCell);
                    row.appendChild(itemTypeCell);
                    row.appendChild(deleteButtonCell);
                    row.appendChild(editButtonCell);

                    itemsTable.appendChild(row);
                });
            } else {
                itemsTable.innerHTML = `<tr><td colspan="5">No items found for User: ${user_id}</td></tr>`;
            }
        } else {
            console.error('Error fetching items:', responseData);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}




function getItemIcon(itemType) {
    if (itemType === 'object') {
        return '<i class="bi bi-box"></i>';
    } else if (itemType === 'container') {
        return '<i class="bi bi-basket-fill"></i>';
    }
    return '';
}


// Replace with your actual access token
 //const accessToken = 'eyJraWQiOiJmSjBSdFBUUjBlY1dVNmwyNkN5UHJNaXFkNk1HakMxVVh5VCtjXC9OTk0wZz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiUVU1d3k0LXMzSzZZTWN4dnA4alNRUSIsInN1YiI6ImYwOTYyNzQzLTg2NjItNGRjMi05N2JkLTVjN2VlMmY2ZDdhYyIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtc291dGgtMS5hbWF6b25hd3MuY29tXC9hcC1zb3V0aC0xXzJ1bERtNzlZRCIsImNvZ25pdG86dXNlcm5hbWUiOiJ1c2VyMTIzIiwiYXVkIjoiNzBiNWV0djJxdnU5ZXR2NHFtdDllMDZmcTEiLCJldmVudF9pZCI6IjBiZDlmMjU0LTBiYjgtNGZiMC1hZWVmLTdjZGM4ZmZlNzgwOCIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjkzMjE0NzE4LCJleHAiOjE2OTMyMTgzMTgsImlhdCI6MTY5MzIxNDcxOCwianRpIjoiNDQ4ZmIyYWYtNzk5Yy00ODZmLTgxNmItYTExNmZlOWIwYTkxIiwiZW1haWwiOiJhZGFyc2hyYWpwdXQxOTE0QGdtYWlsLmNvbSJ9.2JJpxQP_7Wk3FwHXWAUH8geCR-y6FMaLydTotNzab50rsS8WpCXXaDlzt5apk1--n3JytEmtqHkOYjEE7Eon8J_m1uHIG7fSu0-JJI_vC7yi8oDHZCZDF67vC9NJx2enMby3NTK7vpeJ8E3QfjMPQLodl9GqGoFCe5UGmtL7or0QAx5QSJy1zfmahCZ6Eig_P3pDN9_gIitjXN0jQljPp5RRkLULkmPhfIoHJIMIq8h8-6TsyC1zLG3wg1TRFMD2SO-KMAbYMFFs6LR1ot-iVyimUM7lkwvfPat4hG0pGThpOnRbWS4QGYgF9_50PVyvCRNV8Vk3gWOyyUwfzQnLTg';
const user_id = extractUsernameFromToken(accessToken); // Assuming user_id is stored in the token
async function deleteItem(item_name) {
    try {
        const response = await fetch(`https://29kasv5xog.execute-api.ap-south-1.amazonaws.com/dev/items`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id: user_id,
                item_name: item_name
            })
        });

        const responseData = await response.json();

        if (response.status === 200) {
            // Item deleted successfully
            console.log('Item deleted successfully:', responseData);
            loadItems(); // Refresh the items after deletion
        } else {
            console.error('Error deleting item:', responseData);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}
// Usage example
// deleteItem('user123', 'hi');

document.addEventListener('click', async (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const item_name = event.target.dataset.itemName;
        deleteItem(item_name);
    }
});





var toggleFormVisibility = () => {
    var form = document.getElementById('addItemForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
  };
      


  // Function to filter the table rows based on the search query
function filterTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("item-table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0]; // Change the index to the column you want to search (0 for the first column)
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// Add event listener to the search input
document.getElementById("searchInput").addEventListener("keyup", filterTable);

// // Add event listener to the search button
// // document.getElementById("searchButton").addEventListener("click", filterTable);
function toggleSearchBox() {
    var searchBox = document.getElementById("searchBox");
    searchBox.classList.toggle("active");
}

// Click event listener for the search button
document.getElementById("toggleSearchButton").addEventListener("click", toggleSearchBox);

// Click event listener for clicking outside the search box to hide it
window.addEventListener("click", function(event) {
    var searchBox = document.getElementById("searchBox");
    var searchButton = document.getElementById("toggleSearchButton");
    if (!searchBox.contains(event.target) && !searchButton.contains(event.target)) {
        searchBox.classList.remove("active");
    }
});

// Add event listener to the search input for filtering the table (same as previous code)
document.getElementById("searchInput").addEventListener("input", filterTable);
    
$(document).ready(function() {
    // Load the items when the page is ready
    loadItems();
    updateItem();
     deleteItem();
    
    
    
    });
