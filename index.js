import './index.css';

const parentArr = [1, 2];
const parentDiv = document.getElementById('file-explorer');

const parent = document.createElement('div');
parent.classList = 'flex-row';
parent.innerHTML = `<div><span id="collapse"><i class="fa-solid fa-angle-right" id="arrow"></i> </span>Files</div><div class="file-icons" id="icons">
<span id="add-file"><i class="fa-solid fa-file"></i> </span
><span id="add-folder" onclick="addFolder()"><i class="fa-solid fa-folder"></i></span>
</div>`;
const fileDiv = document.createElement('div');
parentDiv.appendChild(parent);

document.getElementById('add-file').onclick = function () {
  console.log('my function');
};

document.getElementById('add-folder').onclick = function () {
  console.log('my folder');
};

parent.onclick = function () {
  console.log(
    document.getElementById('arrow').classList.contains('fa-angle-right')
  );
  if (document.getElementById('arrow').classList.contains('fa-angle-right')) {
    document.getElementById('arrow').classList.remove('fa-angle-right');
    document.getElementById('arrow').classList.add('fa-chevron-down');
    return;
  }

  if (document.getElementById('arrow').classList.contains('fa-chevron-down')) {
    document.getElementById('arrow').classList.remove('fa-chevron-down');
    document.getElementById('arrow').classList.add('fa-angle-right');
    return;
  }
};
