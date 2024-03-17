import React from 'react'

const Loggedin = () => {
  return (
    <>
      <div class="dropdown">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
        
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src=""
            class="rounded-circle"
            height="25"
            width="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a class="dropdown-item">My profile</a>
          </li>
          <li>
            <a class="dropdown-item">Settings</a>
          </li>
          <li>
            <a class="dropdown-item">Logout</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Loggedin