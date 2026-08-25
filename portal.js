const views=[...document.querySelectorAll('.client-view')];
const navButtons=[...document.querySelectorAll('.client-nav [data-view]')];
const toast=document.getElementById('client-toast');
function notify(text){toast.textContent=text;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2800)}
function showView(name){views.forEach(v=>v.classList.toggle('active',v.id===`view-${name}`));navButtons.forEach(b=>b.classList.toggle('active',b.dataset.view===name));window.scrollTo({top:0,behavior:'smooth'})}
navButtons.forEach(b=>b.addEventListener('click',()=>showView(b.dataset.view)));
document.querySelectorAll('[data-view-button]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.viewButton)));
document.querySelectorAll('[data-open-message]').forEach(b=>b.addEventListener('click',()=>showView('messages')));
document.getElementById('read-update').addEventListener('click',e=>{e.currentTarget.textContent='Read ✓';e.currentTarget.disabled=true;notify('Acknowledgement added to the demonstration case log')});
const panel=document.getElementById('upload-panel'),input=document.getElementById('file-input'),selected=document.getElementById('selected-files'),submit=document.getElementById('submit-upload');
function openUpload(){panel.classList.add('open');panel.scrollIntoView({behavior:'smooth',block:'start'})}
['choose-files-top','upload-request'].forEach(id=>document.getElementById(id).addEventListener('click',openUpload));
document.getElementById('browse-files').addEventListener('click',()=>input.click());
function showFiles(files){selected.innerHTML='';[...files].forEach(file=>{const row=document.createElement('div');row.innerHTML=`<span>✓</span><p><b>${file.name.replace(/[<>]/g,'')}</b><small>${Math.max(1,Math.round(file.size/1024))} KB · Ready in this browser only</small></p>`;selected.appendChild(row)});submit.disabled=!files.length}
input.addEventListener('change',()=>showFiles(input.files));
const zone=document.getElementById('drop-zone');['dragenter','dragover'].forEach(n=>zone.addEventListener(n,e=>{e.preventDefault();zone.classList.add('dragging')}));['dragleave','drop'].forEach(n=>zone.addEventListener(n,e=>{e.preventDefault();zone.classList.remove('dragging')}));zone.addEventListener('drop',e=>showFiles(e.dataTransfer.files));
document.getElementById('cancel-upload').addEventListener('click',()=>{panel.classList.remove('open');selected.innerHTML='';input.value='';submit.disabled=true});
submit.addEventListener('click',()=>{notify('Demo complete: a live portal would scan, encrypt and log these files');panel.classList.remove('open');selected.innerHTML='';input.value='';submit.disabled=true});
document.getElementById('send-message').addEventListener('click',()=>{const box=document.getElementById('message-text');if(!box.value.trim())return notify('Write a message first');box.value='';notify('Demo message recorded — nothing was transmitted')});
document.getElementById('new-message').addEventListener('click',()=>document.getElementById('message-text').focus());
document.getElementById('save-details').addEventListener('click',()=>notify('Demo change submitted for staff review'));
document.querySelectorAll('.document-list button,.appointment-card button').forEach(b=>b.addEventListener('click',()=>notify('Demonstration action only')));
