const titles={intake:'New enquiry assistant',briefing:'Matter briefing',admin:'Administration assistant',dashboard:'Supervisor attention view',log:'Case activity log',portal:'Client portal preview'};
const toast=document.getElementById('toast');
function notify(message){toast.textContent=message;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2600)}
document.querySelectorAll('.nav-item').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.nav-item,.tab-panel').forEach(el=>el.classList.remove('active'));
  button.classList.add('active');document.getElementById(button.dataset.tab).classList.add('active');
  document.getElementById('workspace-title').textContent=titles[button.dataset.tab];
}));
document.querySelector('[data-scroll-demo]').addEventListener('click',()=>{document.querySelector('#demo').scrollIntoView();document.querySelector('[data-tab="briefing"]').click()});
document.getElementById('generate-summary').addEventListener('click',()=>{
  const service=document.getElementById('service').value;
  document.getElementById('summary-text').innerHTML=`<h4>${service} enquiry</h4><ul><li>Tenant since 2021; defects reportedly first notified on 12 March 2025.</li><li>Reported defects: damp, mould, roof leak and unreliable heating.</li><li>Potential vulnerability indicator: child with worsening asthma.</li><li>Evidence said to be available: photographs and landlord emails.</li><li><strong>Suggested priority:</strong> human review today; confirm property, landlord, notice evidence and health details.</li></ul>`;
  document.getElementById('summary-output').classList.remove('hidden');
  notify('Structured draft prepared — human review required');
});
document.getElementById('approve-summary').addEventListener('click',()=>notify('Demo only: the item would now enter the callback queue'));
document.getElementById('extract-actions').addEventListener('click',()=>{document.getElementById('task-output').classList.remove('hidden');notify('Three draft actions extracted for review')});
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));button.classList.add('active');notify(`${button.textContent} selected — sample events shown`)}));
document.getElementById('acknowledge-update').addEventListener('click',event=>{event.currentTarget.textContent='Read ✓';event.currentTarget.disabled=true;notify('Demo acknowledgement added to the matter log')});
document.getElementById('portal-upload').addEventListener('click',()=>notify('Demo only — no files are uploaded or stored'));
document.querySelectorAll('.management-switch button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.management-switch button').forEach(b=>b.classList.remove('active'));button.classList.add('active');notify(`${button.textContent} management view selected`)}));
document.querySelectorAll('a[href="#"]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();notify('In a live pilot this would open the source document')}));
