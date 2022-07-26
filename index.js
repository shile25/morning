const addModal = document.querySelector('#add-modal');
const addBackDrop = document.querySelector('#backdrop');
const startToggleButton = document.querySelector('header button');
const cancelToggleButton = document.querySelector('.btn--passive');
const confirmToggleButton = cancelToggleButton.nextElementSibling;
const userInput = document.querySelectorAll('input');
const listItem=[];
const rootList= document.querySelector('.Root');
const newItem= document.createElement('li');
const labelOne = document.getElementById('tog-modal');
const labelTwo = document.getElementById('lab-modal');
const prevLabel = labelTwo.querySelector('.btn--active');
const nextToggle =prevLabel.nextElementSibling;
const cancelLabel= document.querySelector('.btn--active');
const nextLabel = cancelLabel.nextElementSibling;
const labelTry = document.getElementById('net-modal');
const prevTry = labelTry.querySelector('.btn--active');
const nextTry = prevTry.nextElementSibling;
const labelFor = document.getElementById('pre-modal');
const prevFor = labelFor.querySelector('.btn--active');
const nextFor = prevFor.nextElementSibling;
const labelFiv = document.getElementById('rem-modal');
const prevFiv = labelFiv.querySelector('.btn--active');
const nextFiv =  prevFiv.nextElementSibling;
const labelSix = document.getElementById('ram-modal');
const prevSix = labelSix.querySelector('.btn--active');
const nextSix = prevSix.nextElementSibling;
const labelSev = document.getElementById('tok-modal');
const prevSev = labelSev.querySelector('.btn--active');
const nextSev = prevSev.nextElementSibling;
const labelEig = document.getElementById('mar-modal');
const prevEig = labelEig.querySelector('.btn--active');
const nextEig = prevEig.nextElementSibling;
const logList =document.getElementById('log-modal');
const cancelLog = logList.querySelector('.btn--active');
const confirmLog = cancelLog.nextElementSibling;
const header = document.querySelector('.main-header');

const clearValidation=()=>{
  for(const usrInput of userInput){
    usrInput.value='';
  }
}
const toggleBackDrop =()=>{
  addBackDrop.classList.toggle('visible');
}
const deleteBackDrop =()=>{
  addBackDrop.classList.remove('visible');
  closetoggleModal();
  clearValidation();
}
const showtoggleModal =()=>{
  addModal.classList.add('visible');
  toggleBackDrop();
}
const closetoggleModal =()=>{
  addModal.classList.remove('visible');
}
const renderDetails=(fullName)=>{
  newItem.classList.add('element-item');
  
  newItem.innerHTML=`
  <div class="item-info">
   <h2>Hi,${fullName}</h2>
   <p>Thanks for choosen our website</p>
  </div>
  <div class="cta">
  <button class="cta-button">Ok</button>
  </div>
  `;
  rootList.prepend(newItem);
  rootList.addEventListener('click',labelHandle);
}
const clearRoot=()=>{
  if(labelOne===0 ){
    newItem.style.display='block';
  }else{
    newItem.style.display='none';
  }
}
const updateUi=()=>{
  if(listItem===0){
    header.style.display='block';
  }else{
    header.style.display='none';
  }
}
const showLabelHandel=()=>{
  labelOne.classList.add('visible');
}
const closeLabelHandel=()=>{
  labelOne.classList.remove('visible');
}
const labelHandle= ()=>{
  showLabelHandel();
  clearRoot();
}
const removeHandel =()=>{
  closeLabelHandel();
}
const showLabelSix=()=>{
  labelSix.classList.add('visible');
  closeLabelFiv();
}
const closeLabelSix=()=>{
 labelSix.classList.remove('visible');
 labelFiv.classList.add('visible');
}
const showLabelSevHandel=()=>{
  showLabelSev();
  labelSix.classList.remove('visible');
}
const showLabelSev =()=>{
  labelSev.classList.add('visible');
}
const closeLabelSev =()=>{
  labelSev.classList.remove('visible');
}
const showLabelEig=()=>{
  labelEig.classList.add('visible');
}
const closeLabelEig=()=>{
  labelEig.classList.remove('visible');
}
const closeLogList=()=>{
  logList.classList.remove('visible');
}
const showLogList=()=>{
  logList.classList.add('visible');
}
const closeLogListHandel=()=>{
  closeLogList();
  closeLabelEig();
  deleteBackDrop();
  updateUi();
}
const showlabelEigHandel=()=>{
  showLabelEig();
  closeLabelSev();
}
const closeLabelEigHandel=()=>{
  closeLabelEig();
  showLabelSev();
}
const closeLabelSevHandel=()=>{
  labelSix.classList.add('visible');
  closeLabelSev();
}
const showToggleHandle=()=>{
  labelTwo.classList.add('visible');
  removeHandel();
}
const closeToggleHandel=()=>{
  labelTwo.classList.remove('visible');
}
const closeLabel=()=>{
labelOne.classList.remove('visible');
}
const showPrevHandel=()=>{
  showLabelHandel();
  closeToggleHandel();
}
const showLabelTwoHandle=()=>{
  labelTwo.classList.add('visible');
  closeLabelTry();
}
const closeLabelTwoHandle=()=>{
  showLabelFor();
  closeLabelTry();
}
const showlabelfiv=()=>{
  labelFiv.classList.add('visible');
  labelFor.classList.remove('visible');
}
const closeLabelFiv=()=>{
  labelFiv.classList.remove('visible');
}
const showLabelFor=()=>{
  labelFor.classList.add('visible');
}
const closeLabelFor=()=>{
  labelFor.classList.remove('visible');
  labelTry.classList.add('visible');
}
const closelabelFivHandle=()=>{
  showLabelFor();
  closeLabelFiv();
}
const showlabelTryHandel =()=>{
  labelTry.classList.add('visible');
  closeToggleHandel();
}
const closeLabelTry=()=>{
  labelTry.classList.remove('visible'); 
}
const validation =()=>{
  let errorMessage = document.querySelector('.element');
  const Fullnamevalue = userInput[0].value;
  const Emailvalue = userInput[1].value;
  const passwordvalue = userInput[2].value;
  if(Fullnamevalue.trim()<1){
    errorMessage.innerHTML='please enter your name';
    errorMessage.style.padding='0.5rem 0.2rem';
    return false;
  }else if(Emailvalue.trim()===''){
    errorMessage.innerHTML='please enter valid email';
    errorMessage.style.padding='0.5rem 0.2rem';
    return false;
  }else if(passwordvalue<6){
    errorMessage.innerHTML='password must be atleast 6 character';
    return false;
  }

  const list={
    fullName:Fullnamevalue
  };
  listItem.push(list);
  console.log(listItem);
  toggleBackDrop();
  closetoggleModal();
  clearValidation();
  renderDetails(list.fullName);
  updateUi();
};

startToggleButton.addEventListener('click', showtoggleModal);
addBackDrop.addEventListener('click',deleteBackDrop);
cancelToggleButton.addEventListener('click', deleteBackDrop);
confirmToggleButton.addEventListener('click', validation);
rootList.addEventListener('click',labelHandle);
cancelLabel.addEventListener('click',closeLabel );
nextLabel.addEventListener('click', showToggleHandle);
prevLabel.addEventListener('click',showPrevHandel);
nextToggle.addEventListener('click',showlabelTryHandel);
prevTry.addEventListener('click', showLabelTwoHandle);
nextTry.addEventListener('click',closeLabelTwoHandle);
prevFor.addEventListener('click',closeLabelFor);
nextFor.addEventListener('click',showlabelfiv);
prevFiv.addEventListener('click',closelabelFivHandle);
nextFiv.addEventListener('click',showLabelSix);
prevSix.addEventListener('click', closeLabelSix);
nextSix.addEventListener('click',showLabelSevHandel);
prevSev.addEventListener('click',closeLabelSevHandel);
nextSev.addEventListener('click', showlabelEigHandel);
prevEig.addEventListener('click',closeLabelEigHandel);
nextEig.addEventListener('click',showLogList);
cancelLog.addEventListener('click',closeLogList);
confirmLog.addEventListener('click',closeLogListHandel);