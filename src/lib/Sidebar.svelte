<script lang="ts">

  function handleClick() {
    let dropdownBtn = document.getElementById("dropdown-btn") as HTMLButtonElement;
    let dropdownContent = document.getElementById("sidenav") as HTMLDivElement;

    dropdownBtn.classList.toggle("active");
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  };
</script>

<main>
  <button id="dropdown-btn" on:click={handleClick}>Dropdown 
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="sidenav" id="sidenav">
    <a href="#profile">Profile</a>
    <a href="#game">Game</a>
    <a href="#Leadboard">Leadboard</a>
    <a href="#contact">Contact</a>
  </div>
</main>

<style>
  .sidenav {
    display: none;
    height: 100%;
    width: 200px;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    background-color: #111;
    padding-top: 20px;
  }

  .sidenav a,
  #dropdown-btn {
    z-index: 11;
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 20px;
    color: #818181;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    outline: none;
  }

  #dropdown-btn {
    position: fixed;
    top: 0;
    left: 0;
  }

  .sidenav a:hover,
  #dropdown-btn:hover {
    color: #f1f1f1;
  }

  .main {
    margin-left: 200px;
    font-size: 20px; 
    padding: 0px 10px;
  }

  .active {
    background-color: green;
    color: white;
  }

  #dropdown-container {
    display: none;
    background-color: #262626;
    padding-left: 8px;
  }

  .fa-caret-down {
    float: right;
    padding-right: 8px;
  }

  #dropdown-container ul {
    position: fixed;
    margin-left: 192px;
    background-color: #111;
    list-style: none;
    margin-top: -36px;
    padding: 0;
  }

  #dropdown-container ul {
    width: 150px;
  }
</style>
