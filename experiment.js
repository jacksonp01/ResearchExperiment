/******************* 
 * Experiment *
 *******************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'experiment';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(WelcomeScreenRoutineBegin());
flowScheduler.add(WelcomeScreenRoutineEachFrame());
flowScheduler.add(WelcomeScreenRoutineEnd());
flowScheduler.add(ConditionSelectionRoutineBegin());
flowScheduler.add(ConditionSelectionRoutineEachFrame());
flowScheduler.add(ConditionSelectionRoutineEnd());
const WithinSubjectsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(WithinSubjectsLoopBegin(WithinSubjectsLoopScheduler));
flowScheduler.add(WithinSubjectsLoopScheduler);
flowScheduler.add(WithinSubjectsLoopEnd);














flowScheduler.add(EndScreenRoutineBegin());
flowScheduler.add(EndScreenRoutineEachFrame());
flowScheduler.add(EndScreenRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'Spreadsheets/screenshotspreadsheet.csv', 'path': 'Spreadsheets/screenshotspreadsheet.csv'},
    {'name': 'Spreadsheets/wordlistspreadsheets.csv', 'path': 'Spreadsheets/wordlistspreadsheets.csv'},
    {'name': 'video.mp4', 'path': 'video.mp4'},
    {'name': 'Spreadsheets/screenshotspreadsheet.csv', 'path': 'Spreadsheets/screenshotspreadsheet.csv'},
    {'name': 'Spreadsheets/wordlistspreadsheets.csv', 'path': 'Spreadsheets/wordlistspreadsheets.csv'},
    {'name': 'video.mp4', 'path': 'video.mp4'},
    {'name': 'Screenshots/4_long.png', 'path': 'Screenshots/4_long.png'},
    {'name': 'Screenshots/4_short.png', 'path': 'Screenshots/4_short.png'},
    {'name': 'Screenshots/7_long.png', 'path': 'Screenshots/7_long.png'},
    {'name': 'Screenshots/7_short.png', 'path': 'Screenshots/7_short.png'},
    {'name': 'Screenshots/9_long.png', 'path': 'Screenshots/9_long.png'},
    {'name': 'Screenshots/9_short.png', 'path': 'Screenshots/9_short.png'},
    {'name': 'Screenshots/17_long.png', 'path': 'Screenshots/17_long.png'},
    {'name': 'Screenshots/17_short.png', 'path': 'Screenshots/17_short.png'},
    {'name': 'Screenshots/19_long.png', 'path': 'Screenshots/19_long.png'},
    {'name': 'Screenshots/19_short.png', 'path': 'Screenshots/19_short.png'},
    {'name': 'Screenshots/22_long.png', 'path': 'Screenshots/22_long.png'},
    {'name': 'Screenshots/22_short.png', 'path': 'Screenshots/22_short.png'},
    {'name': 'Screenshots/37_long.png', 'path': 'Screenshots/37_long.png'},
    {'name': 'Screenshots/37_short.png', 'path': 'Screenshots/37_short.png'},
    {'name': 'Screenshots/42_long.png', 'path': 'Screenshots/42_long.png'},
    {'name': 'Screenshots/42_short.png', 'path': 'Screenshots/42_short.png'},
    {'name': 'Screenshots/47_long.png', 'path': 'Screenshots/47_long.png'},
    {'name': 'Screenshots/47_short.png', 'path': 'Screenshots/47_short.png'},
    {'name': 'Screenshots/52_long.png', 'path': 'Screenshots/52_long.png'},
    {'name': 'Screenshots/52_short.png', 'path': 'Screenshots/52_short.png'},
    {'name': 'Screenshots/67_long.png', 'path': 'Screenshots/67_long.png'},
    {'name': 'Screenshots/67_short.png', 'path': 'Screenshots/67_short.png'},
    {'name': 'Screenshots/82_long.png', 'path': 'Screenshots/82_long.png'},
    {'name': 'Screenshots/82_short.png', 'path': 'Screenshots/82_short.png'},
    {'name': 'Screenshots/97_long.png', 'path': 'Screenshots/97_long.png'},
    {'name': 'Screenshots/97_short.png', 'path': 'Screenshots/97_short.png'},
    {'name': 'Screenshots/107_long.png', 'path': 'Screenshots/107_long.png'},
    {'name': 'Screenshots/107_short.png', 'path': 'Screenshots/107_short.png'},
    {'name': 'Screenshots/112_long.png', 'path': 'Screenshots/112_long.png'},
    {'name': 'Screenshots/112_short.png', 'path': 'Screenshots/112_short.png'},
    {'name': 'Screenshots/127_long.png', 'path': 'Screenshots/127_long.png'},
    {'name': 'Screenshots/127_short.png', 'path': 'Screenshots/127_short.png'},
    {'name': 'Screenshots/132_long.png', 'path': 'Screenshots/132_long.png'},
    {'name': 'Screenshots/132_short.png', 'path': 'Screenshots/132_short.png'},
    {'name': 'Screenshots/142_long.png', 'path': 'Screenshots/142_long.png'},
    {'name': 'Screenshots/142_short.png', 'path': 'Screenshots/142_short.png'},
    {'name': 'Screenshots/152_long.png', 'path': 'Screenshots/152_long.png'},
    {'name': 'Screenshots/152_short.png', 'path': 'Screenshots/152_short.png'},
    {'name': 'Screenshots/157_long.png', 'path': 'Screenshots/157_long.png'},
    {'name': 'Screenshots/157_short.png', 'path': 'Screenshots/157_short.png'},
    {'name': 'Screenshots/172_long.png', 'path': 'Screenshots/172_long.png'},
    {'name': 'Screenshots/172_short.png', 'path': 'Screenshots/172_short.png'},
    {'name': 'Screenshots/187_long.png', 'path': 'Screenshots/187_long.png'},
    {'name': 'Screenshots/187_short.png', 'path': 'Screenshots/187_short.png'},
    {'name': 'Screenshots/192_long.png', 'path': 'Screenshots/192_long.png'},
    {'name': 'Screenshots/192_short.png', 'path': 'Screenshots/192_short.png'},
    {'name': 'Screenshots/197_long.png', 'path': 'Screenshots/197_long.png'},
    {'name': 'Screenshots/197_short.png', 'path': 'Screenshots/197_short.png'},
    {'name': 'Screenshots/202_long.png', 'path': 'Screenshots/202_long.png'},
    {'name': 'Screenshots/202_short.png', 'path': 'Screenshots/202_short.png'},
    {'name': 'Screenshots/217_long.png', 'path': 'Screenshots/217_long.png'},
    {'name': 'Screenshots/217_short.png', 'path': 'Screenshots/217_short.png'},
    {'name': 'Screenshots/232_long.png', 'path': 'Screenshots/232_long.png'},
    {'name': 'Screenshots/232_short.png', 'path': 'Screenshots/232_short.png'},
    {'name': 'Screenshots/237_long.png', 'path': 'Screenshots/237_long.png'},
    {'name': 'Screenshots/237_short.png', 'path': 'Screenshots/237_short.png'},
    {'name': 'Screenshots/247_long.png', 'path': 'Screenshots/247_long.png'},
    {'name': 'Screenshots/247_short.png', 'path': 'Screenshots/247_short.png'},
    {'name': 'Screenshots/257_long.png', 'path': 'Screenshots/257_long.png'},
    {'name': 'Screenshots/257_short.png', 'path': 'Screenshots/257_short.png'},
    {'name': 'Screenshots/262_long.png', 'path': 'Screenshots/262_long.png'},
    {'name': 'Screenshots/262_short.png', 'path': 'Screenshots/262_short.png'},
    {'name': 'Screenshots/272_long.png', 'path': 'Screenshots/272_long.png'},
    {'name': 'Screenshots/272_short.png', 'path': 'Screenshots/272_short.png'},
    {'name': 'Screenshots/277_long.png', 'path': 'Screenshots/277_long.png'},
    {'name': 'Screenshots/277_short.png', 'path': 'Screenshots/277_short.png'},
    {'name': 'Screenshots/289_long.png', 'path': 'Screenshots/289_long.png'},
    {'name': 'Screenshots/289_short.png', 'path': 'Screenshots/289_short.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var WelcomeScreenClock;
var WelcomeText;
var WelcomeScreenKeyboard;
var ConditionSelectionClock;
var ConditionSelectionText;
var JacksonButton;
var MeganButton;
var JessicaButton;
var JawwadButton;
var VideoInstructionsClock;
var VideoInstructionsText;
var VideoInstructionsKeyboard;
var VideoScreenClock;
var VideoClock;
var Video;
var SecretSkipButtonShhhhhh;
var ScreenshotInstructionsClock;
var ScreenshotInstructionsText;
var ScreenshotInstructionsKeyboard;
var ScreenshotOrderTaskClock;
var ScreenshotLeft;
var ScreenshotRight;
var ScreenshotKeyboard;
var WordListInstructionsClock;
var WordListInstructionsText;
var WordListInstructionsKeyboard;
var WordListStudyClock;
var WordListStudyText;
var WordListDistractionClock;
var WordListDistractionText;
var SecretSkipButtonShhhhhh_3;
var WordListTestClock;
var WordListTestText;
var mouse;
var BreakOrFinishClock;
var BreakText;
var SecretSkipButtonShhhhhh_2;
var EndScreenClock;
var EndScreenText;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "WelcomeScreen"
  WelcomeScreenClock = new util.Clock();
  WelcomeText = new visual.TextStim({
    win: psychoJS.window,
    name: 'WelcomeText',
    text: 'Welcome to the experiment!\n\nPlease make sure you have read and consented to the ethics protocol before continuing.\n\nYou are not allowed to use your phone at any point during this experiment unless explicitly directed to.\n\nPress <SPACE> to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  WelcomeScreenKeyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ConditionSelection"
  ConditionSelectionClock = new util.Clock();
  ConditionSelectionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'ConditionSelectionText',
    text: 'Who invited you to take the experiment?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  JacksonButton = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'JacksonButton',
    text: 'Jackson',
    font: 'Arvo',
    pos: [0.3, 0.3],
    size: [0.3, 0.3],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -1,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  JacksonButton.clock = new util.Clock();
  
  MeganButton = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'MeganButton',
    text: 'Megan',
    font: 'Arvo',
    pos: [0.3, (- 0.3)],
    size: [0.3, 0.3],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -2,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  MeganButton.clock = new util.Clock();
  
  JessicaButton = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'JessicaButton',
    text: 'Jessica',
    font: 'Arvo',
    pos: [(- 0.3), 0.3],
    size: [0.3, 0.3],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -3,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  JessicaButton.clock = new util.Clock();
  
  JawwadButton = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'JawwadButton',
    text: 'Jawwad',
    font: 'Arvo',
    pos: [(- 0.3), (- 0.3)],
    size: [0.3, 0.3],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: psychoJS.window.units,
    color: 'white',
    fillColor: 'darkgrey',
    borderColor: null,
    colorSpace: 'rgb',
    borderWidth: 0.0,
    opacity: null,
    depth: -4,
    letterHeight: 0.05,
    bold: true,
    italic: false,
  });
  JawwadButton.clock = new util.Clock();
  
  // Initialize components for Routine "VideoInstructions"
  VideoInstructionsClock = new util.Clock();
  VideoInstructionsText = new visual.TextStim({
    win: psychoJS.window,
    name: 'VideoInstructionsText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  VideoInstructionsKeyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "VideoScreen"
  VideoScreenClock = new util.Clock();
  VideoClock = new util.Clock();
  Video = new visual.MovieStim({
    win: psychoJS.window,
    movie: 'video.mp4',
    name: 'Video',
    units: psychoJS.window.units,
    pos: [0, 0],
    anchor: 'center',
    size: [1, 0.5625],
    ori: 0.0,
    opacity: null,
    loop: false,
    noAudio: false,
    depth: 0
  })
  SecretSkipButtonShhhhhh = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ScreenshotInstructions"
  ScreenshotInstructionsClock = new util.Clock();
  ScreenshotInstructionsText = new visual.TextStim({
    win: psychoJS.window,
    name: 'ScreenshotInstructionsText',
    text: 'In the next part of the experiment, you will be shown images two at a time.\n\nPlease indicate which one appeared first.\n\nPress <A> for the left image and <D> for the right image.\n\nPress <SPACE> to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  ScreenshotInstructionsKeyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ScreenshotOrderTask"
  ScreenshotOrderTaskClock = new util.Clock();
  ScreenshotLeft = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ScreenshotLeft', units : undefined, 
    image : undefined, mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : 1.0,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  ScreenshotRight = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ScreenshotRight', units : undefined, 
    image : undefined, mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.32, 0], 
    draggable: false,
    size : [0.6, 0.3375],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  ScreenshotKeyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "WordListInstructions"
  WordListInstructionsClock = new util.Clock();
  WordListInstructionsText = new visual.TextStim({
    win: psychoJS.window,
    name: 'WordListInstructionsText',
    text: 'For the next part of the experiment, you will be shown a number of different words.\n\nAfterwards, you will count down from a random number by 3 out loud so that the experimenter can hear.\n\nYou will then be shown one word that appeared at a time and be asked to rate in which position it appeared.\n\nFor instance, the first word that appeared should be rated <1>, the second <2>, and so on.\n\nPress <SPACE> to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  WordListInstructionsKeyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "WordListStudy"
  WordListStudyClock = new util.Clock();
  WordListStudyText = new visual.TextStim({
    win: psychoJS.window,
    name: 'WordListStudyText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "WordListDistraction"
  WordListDistractionClock = new util.Clock();
  WordListDistractionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'WordListDistractionText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Run 'Begin Experiment' code from RandomDistractionNumber
  WordListDistractionText.setText(`Count backwards by 3 from ${util.randint(100, 1000)} out loud.`);
  
  SecretSkipButtonShhhhhh_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "WordListTest"
  WordListTestClock = new util.Clock();
  WordListTestText = new visual.TextStim({
    win: psychoJS.window,
    name: 'WordListTestText',
    text: 'Click on the words in the order they appeared during the study phase.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "BreakOrFinish"
  BreakOrFinishClock = new util.Clock();
  BreakText = new visual.TextStim({
    win: psychoJS.window,
    name: 'BreakText',
    text: 'You will now take a 5 minute break!\n\nDO NOT USE YOUR PHONE DURING THIS BREAK!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  SecretSkipButtonShhhhhh_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "EndScreen"
  EndScreenClock = new util.Clock();
  EndScreenText = new visual.TextStim({
    win: psychoJS.window,
    name: 'EndScreenText',
    text: 'Please wait while we save your results',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var WelcomeScreenMaxDurationReached;
var _WelcomeScreenKeyboard_allKeys;
var WelcomeScreenMaxDuration;
var WelcomeScreenComponents;
function WelcomeScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'WelcomeScreen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    WelcomeScreenClock.reset();
    routineTimer.reset();
    WelcomeScreenMaxDurationReached = false;
    // update component parameters for each repeat
    WelcomeScreenKeyboard.keys = undefined;
    WelcomeScreenKeyboard.rt = undefined;
    _WelcomeScreenKeyboard_allKeys = [];
    psychoJS.experiment.addData('WelcomeScreen.started', globalClock.getTime());
    WelcomeScreenMaxDuration = null
    // keep track of which components have finished
    WelcomeScreenComponents = [];
    WelcomeScreenComponents.push(WelcomeText);
    WelcomeScreenComponents.push(WelcomeScreenKeyboard);
    
    for (const thisComponent of WelcomeScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function WelcomeScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'WelcomeScreen' ---
    // get current time
    t = WelcomeScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *WelcomeText* updates
    if (t >= 0.0 && WelcomeText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      WelcomeText.tStart = t;  // (not accounting for frame time here)
      WelcomeText.frameNStart = frameN;  // exact frame index
      
      WelcomeText.setAutoDraw(true);
    }
    
    
    // if WelcomeText is active this frame...
    if (WelcomeText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *WelcomeScreenKeyboard* updates
    if (t >= 0.0 && WelcomeScreenKeyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      WelcomeScreenKeyboard.tStart = t;  // (not accounting for frame time here)
      WelcomeScreenKeyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { WelcomeScreenKeyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { WelcomeScreenKeyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { WelcomeScreenKeyboard.clearEvents(); });
    }
    
    // if WelcomeScreenKeyboard is active this frame...
    if (WelcomeScreenKeyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = WelcomeScreenKeyboard.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _WelcomeScreenKeyboard_allKeys = _WelcomeScreenKeyboard_allKeys.concat(theseKeys);
      if (_WelcomeScreenKeyboard_allKeys.length > 0) {
        WelcomeScreenKeyboard.keys = _WelcomeScreenKeyboard_allKeys[_WelcomeScreenKeyboard_allKeys.length - 1].name;  // just the last key pressed
        WelcomeScreenKeyboard.rt = _WelcomeScreenKeyboard_allKeys[_WelcomeScreenKeyboard_allKeys.length - 1].rt;
        WelcomeScreenKeyboard.duration = _WelcomeScreenKeyboard_allKeys[_WelcomeScreenKeyboard_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WelcomeScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'WelcomeScreen' ---
    for (const thisComponent of WelcomeScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('WelcomeScreen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(WelcomeScreenKeyboard.corr, level);
    }
    psychoJS.experiment.addData('WelcomeScreenKeyboard.keys', WelcomeScreenKeyboard.keys);
    if (typeof WelcomeScreenKeyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('WelcomeScreenKeyboard.rt', WelcomeScreenKeyboard.rt);
        psychoJS.experiment.addData('WelcomeScreenKeyboard.duration', WelcomeScreenKeyboard.duration);
        routineTimer.reset();
        }
    
    WelcomeScreenKeyboard.stop();
    // the Routine "WelcomeScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ConditionSelectionMaxDurationReached;
var ConditionSelectionMaxDuration;
var ConditionSelectionComponents;
function ConditionSelectionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ConditionSelection' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ConditionSelectionClock.reset();
    routineTimer.reset();
    ConditionSelectionMaxDurationReached = false;
    // update component parameters for each repeat
    // reset JacksonButton to account for continued clicks & clear times on/off
    JacksonButton.reset()
    // reset MeganButton to account for continued clicks & clear times on/off
    MeganButton.reset()
    // reset JessicaButton to account for continued clicks & clear times on/off
    JessicaButton.reset()
    // reset JawwadButton to account for continued clicks & clear times on/off
    JawwadButton.reset()
    psychoJS.experiment.addData('ConditionSelection.started', globalClock.getTime());
    ConditionSelectionMaxDuration = null
    // keep track of which components have finished
    ConditionSelectionComponents = [];
    ConditionSelectionComponents.push(ConditionSelectionText);
    ConditionSelectionComponents.push(JacksonButton);
    ConditionSelectionComponents.push(MeganButton);
    ConditionSelectionComponents.push(JessicaButton);
    ConditionSelectionComponents.push(JawwadButton);
    
    for (const thisComponent of ConditionSelectionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var ConditionVariable;
var NameVariable;
function ConditionSelectionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ConditionSelection' ---
    // get current time
    t = ConditionSelectionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ConditionSelectionText* updates
    if (t >= 0.0 && ConditionSelectionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ConditionSelectionText.tStart = t;  // (not accounting for frame time here)
      ConditionSelectionText.frameNStart = frameN;  // exact frame index
      
      ConditionSelectionText.setAutoDraw(true);
    }
    
    
    // if ConditionSelectionText is active this frame...
    if (ConditionSelectionText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *JacksonButton* updates
    if (t >= 0 && JacksonButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      JacksonButton.tStart = t;  // (not accounting for frame time here)
      JacksonButton.frameNStart = frameN;  // exact frame index
      
      JacksonButton.setAutoDraw(true);
    }
    
    
    // if JacksonButton is active this frame...
    if (JacksonButton.status === PsychoJS.Status.STARTED) {
    }
    
    if (JacksonButton.status === PsychoJS.Status.STARTED) {
      // check whether JacksonButton has been pressed
      if (JacksonButton.isClicked) {
        if (!JacksonButton.wasClicked) {
          // store time of first click
          JacksonButton.timesOn.push(JacksonButton.clock.getTime());
          // store time clicked until
          JacksonButton.timesOff.push(JacksonButton.clock.getTime());
        } else {
          // update time clicked until;
          JacksonButton.timesOff[JacksonButton.timesOff.length - 1] = JacksonButton.clock.getTime();
        }
        if (!JacksonButton.wasClicked) {
          // end routine when JacksonButton is clicked
          continueRoutine = false;
          ConditionVariable = 2;
          NameVariable = "Jackson";
        }
        // if JacksonButton is still clicked next frame, it is not a new click
        JacksonButton.wasClicked = true;
      } else {
        // if JacksonButton is clicked next frame, it is a new click
        JacksonButton.wasClicked = false;
      }
    } else {
      // keep clock at 0 if JacksonButton hasn't started / has finished
      JacksonButton.clock.reset();
      // if JacksonButton is clicked next frame, it is a new click
      JacksonButton.wasClicked = false;
    }
    
    // *MeganButton* updates
    if (t >= 0 && MeganButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MeganButton.tStart = t;  // (not accounting for frame time here)
      MeganButton.frameNStart = frameN;  // exact frame index
      
      MeganButton.setAutoDraw(true);
    }
    
    
    // if MeganButton is active this frame...
    if (MeganButton.status === PsychoJS.Status.STARTED) {
    }
    
    if (MeganButton.status === PsychoJS.Status.STARTED) {
      // check whether MeganButton has been pressed
      if (MeganButton.isClicked) {
        if (!MeganButton.wasClicked) {
          // store time of first click
          MeganButton.timesOn.push(MeganButton.clock.getTime());
          // store time clicked until
          MeganButton.timesOff.push(MeganButton.clock.getTime());
        } else {
          // update time clicked until;
          MeganButton.timesOff[MeganButton.timesOff.length - 1] = MeganButton.clock.getTime();
        }
        if (!MeganButton.wasClicked) {
          // end routine when MeganButton is clicked
          continueRoutine = false;
          ConditionVariable = 4;
          NameVariable = "Megan";
        }
        // if MeganButton is still clicked next frame, it is not a new click
        MeganButton.wasClicked = true;
      } else {
        // if MeganButton is clicked next frame, it is a new click
        MeganButton.wasClicked = false;
      }
    } else {
      // keep clock at 0 if MeganButton hasn't started / has finished
      MeganButton.clock.reset();
      // if MeganButton is clicked next frame, it is a new click
      MeganButton.wasClicked = false;
    }
    
    // *JessicaButton* updates
    if (t >= 0 && JessicaButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      JessicaButton.tStart = t;  // (not accounting for frame time here)
      JessicaButton.frameNStart = frameN;  // exact frame index
      
      JessicaButton.setAutoDraw(true);
    }
    
    
    // if JessicaButton is active this frame...
    if (JessicaButton.status === PsychoJS.Status.STARTED) {
    }
    
    if (JessicaButton.status === PsychoJS.Status.STARTED) {
      // check whether JessicaButton has been pressed
      if (JessicaButton.isClicked) {
        if (!JessicaButton.wasClicked) {
          // store time of first click
          JessicaButton.timesOn.push(JessicaButton.clock.getTime());
          // store time clicked until
          JessicaButton.timesOff.push(JessicaButton.clock.getTime());
        } else {
          // update time clicked until;
          JessicaButton.timesOff[JessicaButton.timesOff.length - 1] = JessicaButton.clock.getTime();
        }
        if (!JessicaButton.wasClicked) {
          // end routine when JessicaButton is clicked
          continueRoutine = false;
          ConditionVariable = 1;
          NameVariable = "Jessica";
        }
        // if JessicaButton is still clicked next frame, it is not a new click
        JessicaButton.wasClicked = true;
      } else {
        // if JessicaButton is clicked next frame, it is a new click
        JessicaButton.wasClicked = false;
      }
    } else {
      // keep clock at 0 if JessicaButton hasn't started / has finished
      JessicaButton.clock.reset();
      // if JessicaButton is clicked next frame, it is a new click
      JessicaButton.wasClicked = false;
    }
    
    // *JawwadButton* updates
    if (t >= 0 && JawwadButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      JawwadButton.tStart = t;  // (not accounting for frame time here)
      JawwadButton.frameNStart = frameN;  // exact frame index
      
      JawwadButton.setAutoDraw(true);
    }
    
    
    // if JawwadButton is active this frame...
    if (JawwadButton.status === PsychoJS.Status.STARTED) {
    }
    
    if (JawwadButton.status === PsychoJS.Status.STARTED) {
      // check whether JawwadButton has been pressed
      if (JawwadButton.isClicked) {
        if (!JawwadButton.wasClicked) {
          // store time of first click
          JawwadButton.timesOn.push(JawwadButton.clock.getTime());
          // store time clicked until
          JawwadButton.timesOff.push(JawwadButton.clock.getTime());
        } else {
          // update time clicked until;
          JawwadButton.timesOff[JawwadButton.timesOff.length - 1] = JawwadButton.clock.getTime();
        }
        if (!JawwadButton.wasClicked) {
          // end routine when JawwadButton is clicked
          continueRoutine = false;
          ConditionVariable = 3;
          NameVariable = "Jawwad";
        }
        // if JawwadButton is still clicked next frame, it is not a new click
        JawwadButton.wasClicked = true;
      } else {
        // if JawwadButton is clicked next frame, it is a new click
        JawwadButton.wasClicked = false;
      }
    } else {
      // keep clock at 0 if JawwadButton hasn't started / has finished
      JawwadButton.clock.reset();
      // if JawwadButton is clicked next frame, it is a new click
      JawwadButton.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ConditionSelectionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ConditionSelectionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ConditionSelection' ---
    for (const thisComponent of ConditionSelectionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ConditionSelection.stopped', globalClock.getTime());
    psychoJS.experiment.addData('JacksonButton.numClicks', JacksonButton.numClicks);
    psychoJS.experiment.addData('JacksonButton.timesOn', JacksonButton.timesOn);
    psychoJS.experiment.addData('JacksonButton.timesOff', JacksonButton.timesOff);
    psychoJS.experiment.addData('MeganButton.numClicks', MeganButton.numClicks);
    psychoJS.experiment.addData('MeganButton.timesOn', MeganButton.timesOn);
    psychoJS.experiment.addData('MeganButton.timesOff', MeganButton.timesOff);
    psychoJS.experiment.addData('JessicaButton.numClicks', JessicaButton.numClicks);
    psychoJS.experiment.addData('JessicaButton.timesOn', JessicaButton.timesOn);
    psychoJS.experiment.addData('JessicaButton.timesOff', JessicaButton.timesOff);
    psychoJS.experiment.addData('JawwadButton.numClicks', JawwadButton.numClicks);
    psychoJS.experiment.addData('JawwadButton.timesOn', JawwadButton.timesOn);
    psychoJS.experiment.addData('JawwadButton.timesOff', JawwadButton.timesOff);
    // the Routine "ConditionSelection" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var WithinSubjects;
function WithinSubjectsLoopBegin(WithinSubjectsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    WithinSubjects = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'WithinSubjects'
    });
    psychoJS.experiment.addLoop(WithinSubjects); // add the loop to the experiment
    currentLoop = WithinSubjects;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisWithinSubject of WithinSubjects) {
      snapshot = WithinSubjects.getSnapshot();
      WithinSubjectsLoopScheduler.add(importConditions(snapshot));
      WithinSubjectsLoopScheduler.add(VideoInstructionsRoutineBegin(snapshot));
      WithinSubjectsLoopScheduler.add(VideoInstructionsRoutineEachFrame());
      WithinSubjectsLoopScheduler.add(VideoInstructionsRoutineEnd(snapshot));
      WithinSubjectsLoopScheduler.add(VideoScreenRoutineBegin(snapshot));
      WithinSubjectsLoopScheduler.add(VideoScreenRoutineEachFrame());
      WithinSubjectsLoopScheduler.add(VideoScreenRoutineEnd(snapshot));
      WithinSubjectsLoopScheduler.add(ScreenshotInstructionsRoutineBegin(snapshot));
      WithinSubjectsLoopScheduler.add(ScreenshotInstructionsRoutineEachFrame());
      WithinSubjectsLoopScheduler.add(ScreenshotInstructionsRoutineEnd(snapshot));
      const ScreenshotOrderTrialsLoopScheduler = new Scheduler(psychoJS);
      WithinSubjectsLoopScheduler.add(ScreenshotOrderTrialsLoopBegin(ScreenshotOrderTrialsLoopScheduler, snapshot));
      WithinSubjectsLoopScheduler.add(ScreenshotOrderTrialsLoopScheduler);
      WithinSubjectsLoopScheduler.add(ScreenshotOrderTrialsLoopEnd);
      WithinSubjectsLoopScheduler.add(WordListInstructionsRoutineBegin(snapshot));
      WithinSubjectsLoopScheduler.add(WordListInstructionsRoutineEachFrame());
      WithinSubjectsLoopScheduler.add(WordListInstructionsRoutineEnd(snapshot));
      const WordListStudyTrialsLoopScheduler = new Scheduler(psychoJS);
      WithinSubjectsLoopScheduler.add(WordListStudyTrialsLoopBegin(WordListStudyTrialsLoopScheduler, snapshot));
      WithinSubjectsLoopScheduler.add(WordListStudyTrialsLoopScheduler);
      WithinSubjectsLoopScheduler.add(WordListStudyTrialsLoopEnd);
      WithinSubjectsLoopScheduler.add(WordListDistractionRoutineBegin(snapshot));
      WithinSubjectsLoopScheduler.add(WordListDistractionRoutineEachFrame());
      WithinSubjectsLoopScheduler.add(WordListDistractionRoutineEnd(snapshot));
      WithinSubjectsLoopScheduler.add(WordListTestRoutineBegin(snapshot));
      WithinSubjectsLoopScheduler.add(WordListTestRoutineEachFrame());
      WithinSubjectsLoopScheduler.add(WordListTestRoutineEnd(snapshot));
      WithinSubjectsLoopScheduler.add(BreakOrFinishRoutineBegin(snapshot));
      WithinSubjectsLoopScheduler.add(BreakOrFinishRoutineEachFrame());
      WithinSubjectsLoopScheduler.add(BreakOrFinishRoutineEnd(snapshot));
      WithinSubjectsLoopScheduler.add(WithinSubjectsLoopEndIteration(WithinSubjectsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var ScreenshotOrderTrials;
function ScreenshotOrderTrialsLoopBegin(ScreenshotOrderTrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    ScreenshotOrderTrials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Spreadsheets/screenshotspreadsheet.csv',
      seed: undefined, name: 'ScreenshotOrderTrials'
    });
    psychoJS.experiment.addLoop(ScreenshotOrderTrials); // add the loop to the experiment
    currentLoop = ScreenshotOrderTrials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisScreenshotOrderTrial of ScreenshotOrderTrials) {
      snapshot = ScreenshotOrderTrials.getSnapshot();
      ScreenshotOrderTrialsLoopScheduler.add(importConditions(snapshot));
      ScreenshotOrderTrialsLoopScheduler.add(ScreenshotOrderTaskRoutineBegin(snapshot));
      ScreenshotOrderTrialsLoopScheduler.add(ScreenshotOrderTaskRoutineEachFrame());
      ScreenshotOrderTrialsLoopScheduler.add(ScreenshotOrderTaskRoutineEnd(snapshot));
      ScreenshotOrderTrialsLoopScheduler.add(ScreenshotOrderTrialsLoopEndIteration(ScreenshotOrderTrialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function ScreenshotOrderTrialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(ScreenshotOrderTrials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function ScreenshotOrderTrialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var WordListStudyTrials;
function WordListStudyTrialsLoopBegin(WordListStudyTrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    WordListStudyTrials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Spreadsheets/wordlistspreadsheets.csv',
      seed: undefined, name: 'WordListStudyTrials'
    });
    psychoJS.experiment.addLoop(WordListStudyTrials); // add the loop to the experiment
    currentLoop = WordListStudyTrials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisWordListStudyTrial of WordListStudyTrials) {
      snapshot = WordListStudyTrials.getSnapshot();
      WordListStudyTrialsLoopScheduler.add(importConditions(snapshot));
      WordListStudyTrialsLoopScheduler.add(WordListStudyRoutineBegin(snapshot));
      WordListStudyTrialsLoopScheduler.add(WordListStudyRoutineEachFrame());
      WordListStudyTrialsLoopScheduler.add(WordListStudyRoutineEnd(snapshot));
      WordListStudyTrialsLoopScheduler.add(WordListStudyTrialsLoopEndIteration(WordListStudyTrialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function WordListStudyTrialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(WordListStudyTrials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function WordListStudyTrialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function WithinSubjectsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(WithinSubjects);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function WithinSubjectsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var VideoInstructionsMaxDurationReached;
var _VideoInstructionsKeyboard_allKeys;
var VideoInstructionsMaxDuration;
var VideoInstructionsComponents;
function VideoInstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'VideoInstructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    VideoInstructionsClock.reset();
    routineTimer.reset();
    VideoInstructionsMaxDurationReached = false;
    // update component parameters for each repeat
    VideoInstructionsKeyboard.keys = undefined;
    VideoInstructionsKeyboard.rt = undefined;
    _VideoInstructionsKeyboard_allKeys = [];
    // Run 'Begin Routine' code from VideoInstructionsCode
    if (((ConditionVariable === 1) || (ConditionVariable === 2))) {
        VideoInstructionsText.setText("Please take out your phone and go the Instagram account @psy379proj\n\n Watch every video in order from top to bottom with the volume on.\n\n You must finish each video before scrolling to the next and only watch each video once.\n\n Press <SPACE> when you are finished!");
    } else {
        VideoInstructionsText.setText("You will now watch a brief video. Please do not use your phone at any point during the video.\n\nPress <SPACE> to continue.");
    }
    
    psychoJS.experiment.addData('VideoInstructions.started', globalClock.getTime());
    VideoInstructionsMaxDuration = null
    // keep track of which components have finished
    VideoInstructionsComponents = [];
    VideoInstructionsComponents.push(VideoInstructionsText);
    VideoInstructionsComponents.push(VideoInstructionsKeyboard);
    
    for (const thisComponent of VideoInstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function VideoInstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'VideoInstructions' ---
    // get current time
    t = VideoInstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *VideoInstructionsText* updates
    if (t >= 0.0 && VideoInstructionsText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      VideoInstructionsText.tStart = t;  // (not accounting for frame time here)
      VideoInstructionsText.frameNStart = frameN;  // exact frame index
      
      VideoInstructionsText.setAutoDraw(true);
    }
    
    
    // if VideoInstructionsText is active this frame...
    if (VideoInstructionsText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *VideoInstructionsKeyboard* updates
    if (t >= 0.0 && VideoInstructionsKeyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      VideoInstructionsKeyboard.tStart = t;  // (not accounting for frame time here)
      VideoInstructionsKeyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { VideoInstructionsKeyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { VideoInstructionsKeyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { VideoInstructionsKeyboard.clearEvents(); });
    }
    
    // if VideoInstructionsKeyboard is active this frame...
    if (VideoInstructionsKeyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = VideoInstructionsKeyboard.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _VideoInstructionsKeyboard_allKeys = _VideoInstructionsKeyboard_allKeys.concat(theseKeys);
      if (_VideoInstructionsKeyboard_allKeys.length > 0) {
        VideoInstructionsKeyboard.keys = _VideoInstructionsKeyboard_allKeys[_VideoInstructionsKeyboard_allKeys.length - 1].name;  // just the last key pressed
        VideoInstructionsKeyboard.rt = _VideoInstructionsKeyboard_allKeys[_VideoInstructionsKeyboard_allKeys.length - 1].rt;
        VideoInstructionsKeyboard.duration = _VideoInstructionsKeyboard_allKeys[_VideoInstructionsKeyboard_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of VideoInstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function VideoInstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'VideoInstructions' ---
    for (const thisComponent of VideoInstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('VideoInstructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(VideoInstructionsKeyboard.corr, level);
    }
    psychoJS.experiment.addData('VideoInstructionsKeyboard.keys', VideoInstructionsKeyboard.keys);
    if (typeof VideoInstructionsKeyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('VideoInstructionsKeyboard.rt', VideoInstructionsKeyboard.rt);
        psychoJS.experiment.addData('VideoInstructionsKeyboard.duration', VideoInstructionsKeyboard.duration);
        routineTimer.reset();
        }
    
    VideoInstructionsKeyboard.stop();
    // the Routine "VideoInstructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var VideoScreenMaxDurationReached;
var _SecretSkipButtonShhhhhh_allKeys;
var maxDurationReached;
var VideoScreenMaxDuration;
var VideoScreenComponents;
function VideoScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'VideoScreen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    VideoScreenClock.reset();
    routineTimer.reset();
    VideoScreenMaxDurationReached = false;
    // update component parameters for each repeat
    SecretSkipButtonShhhhhh.keys = undefined;
    SecretSkipButtonShhhhhh.rt = undefined;
    _SecretSkipButtonShhhhhh_allKeys = [];
    psychoJS.experiment.addData('VideoScreen.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((ConditionVariable <= 2));
    maxDurationReached = false
    VideoScreenMaxDuration = null
    // keep track of which components have finished
    VideoScreenComponents = [];
    VideoScreenComponents.push(Video);
    VideoScreenComponents.push(SecretSkipButtonShhhhhh);
    
    for (const thisComponent of VideoScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function VideoScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'VideoScreen' ---
    // get current time
    t = VideoScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Video* updates
    if (t >= 0.0 && Video.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Video.tStart = t;  // (not accounting for frame time here)
      Video.frameNStart = frameN;  // exact frame index
      
      Video.setAutoDraw(true);
      Video.play();
    }
    
    if (Video.status === PsychoJS.Status.FINISHED) {  // force-end the Routine
        continueRoutine = false;
    }
    
    // *SecretSkipButtonShhhhhh* updates
    if (t >= 0.0 && SecretSkipButtonShhhhhh.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SecretSkipButtonShhhhhh.tStart = t;  // (not accounting for frame time here)
      SecretSkipButtonShhhhhh.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { SecretSkipButtonShhhhhh.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { SecretSkipButtonShhhhhh.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { SecretSkipButtonShhhhhh.clearEvents(); });
    }
    
    // if SecretSkipButtonShhhhhh is active this frame...
    if (SecretSkipButtonShhhhhh.status === PsychoJS.Status.STARTED) {
      let theseKeys = SecretSkipButtonShhhhhh.getKeys({
        keyList: typeof '0' === 'string' ? ['0'] : '0', 
        waitRelease: false
      });
      _SecretSkipButtonShhhhhh_allKeys = _SecretSkipButtonShhhhhh_allKeys.concat(theseKeys);
      if (_SecretSkipButtonShhhhhh_allKeys.length > 0) {
        SecretSkipButtonShhhhhh.keys = _SecretSkipButtonShhhhhh_allKeys[_SecretSkipButtonShhhhhh_allKeys.length - 1].name;  // just the last key pressed
        SecretSkipButtonShhhhhh.rt = _SecretSkipButtonShhhhhh_allKeys[_SecretSkipButtonShhhhhh_allKeys.length - 1].rt;
        SecretSkipButtonShhhhhh.duration = _SecretSkipButtonShhhhhh_allKeys[_SecretSkipButtonShhhhhh_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of VideoScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function VideoScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'VideoScreen' ---
    for (const thisComponent of VideoScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('VideoScreen.stopped', globalClock.getTime());
    Video.stop();  // ensure movie has stopped at end of Routine
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(SecretSkipButtonShhhhhh.corr, level);
    }
    psychoJS.experiment.addData('SecretSkipButtonShhhhhh.keys', SecretSkipButtonShhhhhh.keys);
    if (typeof SecretSkipButtonShhhhhh.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('SecretSkipButtonShhhhhh.rt', SecretSkipButtonShhhhhh.rt);
        psychoJS.experiment.addData('SecretSkipButtonShhhhhh.duration', SecretSkipButtonShhhhhh.duration);
        routineTimer.reset();
        }
    
    SecretSkipButtonShhhhhh.stop();
    // the Routine "VideoScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ScreenshotInstructionsMaxDurationReached;
var _ScreenshotInstructionsKeyboard_allKeys;
var ScreenshotInstructionsMaxDuration;
var ScreenshotInstructionsComponents;
function ScreenshotInstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ScreenshotInstructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ScreenshotInstructionsClock.reset();
    routineTimer.reset();
    ScreenshotInstructionsMaxDurationReached = false;
    // update component parameters for each repeat
    ScreenshotInstructionsKeyboard.keys = undefined;
    ScreenshotInstructionsKeyboard.rt = undefined;
    _ScreenshotInstructionsKeyboard_allKeys = [];
    psychoJS.experiment.addData('ScreenshotInstructions.started', globalClock.getTime());
    ScreenshotInstructionsMaxDuration = null
    // keep track of which components have finished
    ScreenshotInstructionsComponents = [];
    ScreenshotInstructionsComponents.push(ScreenshotInstructionsText);
    ScreenshotInstructionsComponents.push(ScreenshotInstructionsKeyboard);
    
    for (const thisComponent of ScreenshotInstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ScreenshotInstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ScreenshotInstructions' ---
    // get current time
    t = ScreenshotInstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ScreenshotInstructionsText* updates
    if (t >= 0.0 && ScreenshotInstructionsText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ScreenshotInstructionsText.tStart = t;  // (not accounting for frame time here)
      ScreenshotInstructionsText.frameNStart = frameN;  // exact frame index
      
      ScreenshotInstructionsText.setAutoDraw(true);
    }
    
    
    // if ScreenshotInstructionsText is active this frame...
    if (ScreenshotInstructionsText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ScreenshotInstructionsKeyboard* updates
    if (t >= 0.0 && ScreenshotInstructionsKeyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ScreenshotInstructionsKeyboard.tStart = t;  // (not accounting for frame time here)
      ScreenshotInstructionsKeyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ScreenshotInstructionsKeyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ScreenshotInstructionsKeyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ScreenshotInstructionsKeyboard.clearEvents(); });
    }
    
    // if ScreenshotInstructionsKeyboard is active this frame...
    if (ScreenshotInstructionsKeyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = ScreenshotInstructionsKeyboard.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _ScreenshotInstructionsKeyboard_allKeys = _ScreenshotInstructionsKeyboard_allKeys.concat(theseKeys);
      if (_ScreenshotInstructionsKeyboard_allKeys.length > 0) {
        ScreenshotInstructionsKeyboard.keys = _ScreenshotInstructionsKeyboard_allKeys[_ScreenshotInstructionsKeyboard_allKeys.length - 1].name;  // just the last key pressed
        ScreenshotInstructionsKeyboard.rt = _ScreenshotInstructionsKeyboard_allKeys[_ScreenshotInstructionsKeyboard_allKeys.length - 1].rt;
        ScreenshotInstructionsKeyboard.duration = _ScreenshotInstructionsKeyboard_allKeys[_ScreenshotInstructionsKeyboard_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ScreenshotInstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ScreenshotInstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ScreenshotInstructions' ---
    for (const thisComponent of ScreenshotInstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ScreenshotInstructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(ScreenshotInstructionsKeyboard.corr, level);
    }
    psychoJS.experiment.addData('ScreenshotInstructionsKeyboard.keys', ScreenshotInstructionsKeyboard.keys);
    if (typeof ScreenshotInstructionsKeyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ScreenshotInstructionsKeyboard.rt', ScreenshotInstructionsKeyboard.rt);
        psychoJS.experiment.addData('ScreenshotInstructionsKeyboard.duration', ScreenshotInstructionsKeyboard.duration);
        routineTimer.reset();
        }
    
    ScreenshotInstructionsKeyboard.stop();
    // the Routine "ScreenshotInstructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ScreenshotOrderTaskMaxDurationReached;
var _ScreenshotKeyboard_allKeys;
var ScreenshotOrderTaskMaxDuration;
var ScreenshotOrderTaskComponents;
function ScreenshotOrderTaskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ScreenshotOrderTask' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    ScreenshotOrderTaskClock.reset();
    routineTimer.reset();
    ScreenshotOrderTaskMaxDurationReached = false;
    // update component parameters for each repeat
    ScreenshotLeft.setPos([(- 0.32), 0]);
    ScreenshotLeft.setSize([0.3375, 0.6]);
    ScreenshotKeyboard.keys = undefined;
    ScreenshotKeyboard.rt = undefined;
    _ScreenshotKeyboard_allKeys = [];
    // Run 'Begin Routine' code from ScreenshotCode
    if (((ConditionVariable === 1) || (ConditionVariable === 2))) {
        ScreenshotLeft.image = `Screenshots/${Condition1Left}`;
        ScreenshotRight.image = `Screenshots/${Condition1Right}`;
        ScreenshotLeft.size = [0.45, 0.8];
        ScreenshotRight.size = [0.45, 0.8];
    } else {
        ScreenshotLeft.image = `Screenshots/${Condition2Left}`;
        ScreenshotRight.image = `Screenshots/${Condition2Right}`;
        ScreenshotLeft.size = [0.6, 0.3375];
        ScreenshotRight.size = [0.6, 0.3375];
    }
    
    psychoJS.experiment.addData('ScreenshotOrderTask.started', globalClock.getTime());
    ScreenshotOrderTaskMaxDuration = null
    // keep track of which components have finished
    ScreenshotOrderTaskComponents = [];
    ScreenshotOrderTaskComponents.push(ScreenshotLeft);
    ScreenshotOrderTaskComponents.push(ScreenshotRight);
    ScreenshotOrderTaskComponents.push(ScreenshotKeyboard);
    
    for (const thisComponent of ScreenshotOrderTaskComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ScreenshotOrderTaskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ScreenshotOrderTask' ---
    // get current time
    t = ScreenshotOrderTaskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ScreenshotLeft* updates
    if (t >= 0.0 && ScreenshotLeft.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ScreenshotLeft.tStart = t;  // (not accounting for frame time here)
      ScreenshotLeft.frameNStart = frameN;  // exact frame index
      
      ScreenshotLeft.setAutoDraw(true);
    }
    
    
    // if ScreenshotLeft is active this frame...
    if (ScreenshotLeft.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ScreenshotRight* updates
    if (t >= 0.0 && ScreenshotRight.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ScreenshotRight.tStart = t;  // (not accounting for frame time here)
      ScreenshotRight.frameNStart = frameN;  // exact frame index
      
      ScreenshotRight.setAutoDraw(true);
    }
    
    
    // if ScreenshotRight is active this frame...
    if (ScreenshotRight.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *ScreenshotKeyboard* updates
    if (t >= 0.0 && ScreenshotKeyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ScreenshotKeyboard.tStart = t;  // (not accounting for frame time here)
      ScreenshotKeyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ScreenshotKeyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ScreenshotKeyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ScreenshotKeyboard.clearEvents(); });
    }
    
    // if ScreenshotKeyboard is active this frame...
    if (ScreenshotKeyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = ScreenshotKeyboard.getKeys({
        keyList: typeof ['a','d'] === 'string' ? [['a','d']] : ['a','d'], 
        waitRelease: false
      });
      _ScreenshotKeyboard_allKeys = _ScreenshotKeyboard_allKeys.concat(theseKeys);
      if (_ScreenshotKeyboard_allKeys.length > 0) {
        ScreenshotKeyboard.keys = _ScreenshotKeyboard_allKeys[_ScreenshotKeyboard_allKeys.length - 1].name;  // just the last key pressed
        ScreenshotKeyboard.rt = _ScreenshotKeyboard_allKeys[_ScreenshotKeyboard_allKeys.length - 1].rt;
        ScreenshotKeyboard.duration = _ScreenshotKeyboard_allKeys[_ScreenshotKeyboard_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ScreenshotOrderTaskComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ScreenshotOrderTaskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ScreenshotOrderTask' ---
    for (const thisComponent of ScreenshotOrderTaskComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ScreenshotOrderTask.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(ScreenshotKeyboard.corr, level);
    }
    psychoJS.experiment.addData('ScreenshotKeyboard.keys', ScreenshotKeyboard.keys);
    if (typeof ScreenshotKeyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ScreenshotKeyboard.rt', ScreenshotKeyboard.rt);
        psychoJS.experiment.addData('ScreenshotKeyboard.duration', ScreenshotKeyboard.duration);
        routineTimer.reset();
        }
    
    ScreenshotKeyboard.stop();
    // Run 'End Routine' code from ScreenshotCode
    if (((ConditionVariable === 1) || (ConditionVariable === 2))) {
        if ((ScreenshotKeyboard.keys === Condition1Correct)) {
            psychoJS.experiment.addData("Screenshot_Correct", 1);
        } else {
            psychoJS.experiment.addData("Screenshot_Correct", 0);
        }
    }
    if (((ConditionVariable === 3) || (ConditionVariable === 4))) {
        if ((ScreenshotKeyboard.keys === Condition2Correct)) {
            psychoJS.experiment.addData("Screenshot_Correct", 1);
        } else {
            psychoJS.experiment.addData("Screenshot_Correct", 0);
        }
    }
    
    // the Routine "ScreenshotOrderTask" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var WordListInstructionsMaxDurationReached;
var _WordListInstructionsKeyboard_allKeys;
var WordListInstructionsMaxDuration;
var WordListInstructionsComponents;
function WordListInstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'WordListInstructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    WordListInstructionsClock.reset();
    routineTimer.reset();
    WordListInstructionsMaxDurationReached = false;
    // update component parameters for each repeat
    WordListInstructionsKeyboard.keys = undefined;
    WordListInstructionsKeyboard.rt = undefined;
    _WordListInstructionsKeyboard_allKeys = [];
    psychoJS.experiment.addData('WordListInstructions.started', globalClock.getTime());
    WordListInstructionsMaxDuration = null
    // keep track of which components have finished
    WordListInstructionsComponents = [];
    WordListInstructionsComponents.push(WordListInstructionsText);
    WordListInstructionsComponents.push(WordListInstructionsKeyboard);
    
    for (const thisComponent of WordListInstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function WordListInstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'WordListInstructions' ---
    // get current time
    t = WordListInstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *WordListInstructionsText* updates
    if (t >= 0.0 && WordListInstructionsText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      WordListInstructionsText.tStart = t;  // (not accounting for frame time here)
      WordListInstructionsText.frameNStart = frameN;  // exact frame index
      
      WordListInstructionsText.setAutoDraw(true);
    }
    
    
    // if WordListInstructionsText is active this frame...
    if (WordListInstructionsText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *WordListInstructionsKeyboard* updates
    if (t >= 0.0 && WordListInstructionsKeyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      WordListInstructionsKeyboard.tStart = t;  // (not accounting for frame time here)
      WordListInstructionsKeyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { WordListInstructionsKeyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { WordListInstructionsKeyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { WordListInstructionsKeyboard.clearEvents(); });
    }
    
    // if WordListInstructionsKeyboard is active this frame...
    if (WordListInstructionsKeyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = WordListInstructionsKeyboard.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _WordListInstructionsKeyboard_allKeys = _WordListInstructionsKeyboard_allKeys.concat(theseKeys);
      if (_WordListInstructionsKeyboard_allKeys.length > 0) {
        WordListInstructionsKeyboard.keys = _WordListInstructionsKeyboard_allKeys[_WordListInstructionsKeyboard_allKeys.length - 1].name;  // just the last key pressed
        WordListInstructionsKeyboard.rt = _WordListInstructionsKeyboard_allKeys[_WordListInstructionsKeyboard_allKeys.length - 1].rt;
        WordListInstructionsKeyboard.duration = _WordListInstructionsKeyboard_allKeys[_WordListInstructionsKeyboard_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WordListInstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WordListInstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'WordListInstructions' ---
    for (const thisComponent of WordListInstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('WordListInstructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(WordListInstructionsKeyboard.corr, level);
    }
    psychoJS.experiment.addData('WordListInstructionsKeyboard.keys', WordListInstructionsKeyboard.keys);
    if (typeof WordListInstructionsKeyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('WordListInstructionsKeyboard.rt', WordListInstructionsKeyboard.rt);
        psychoJS.experiment.addData('WordListInstructionsKeyboard.duration', WordListInstructionsKeyboard.duration);
        routineTimer.reset();
        }
    
    WordListInstructionsKeyboard.stop();
    // the Routine "WordListInstructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var WordListStudyMaxDurationReached;
var WordListStudyMaxDuration;
var WordListStudyComponents;
function WordListStudyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'WordListStudy' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    WordListStudyClock.reset(routineTimer.getTime());
    routineTimer.add(2.000000);
    WordListStudyMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from WordListStudyCode
    if (((ConditionVariable === 1) || (ConditionVariable === 3))) {
        psychoJS.experiment.addData("Study_Word", Condition1List);
        WordListStudyText.text = Condition1List;
    } else {
        psychoJS.experiment.addData("Study_Word", Condition2List);
        WordListStudyText.text = Condition2List;
    }
    
    psychoJS.experiment.addData('WordListStudy.started', globalClock.getTime());
    WordListStudyMaxDuration = null
    // keep track of which components have finished
    WordListStudyComponents = [];
    WordListStudyComponents.push(WordListStudyText);
    
    for (const thisComponent of WordListStudyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function WordListStudyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'WordListStudy' ---
    // get current time
    t = WordListStudyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *WordListStudyText* updates
    if (t >= 0.0 && WordListStudyText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      WordListStudyText.tStart = t;  // (not accounting for frame time here)
      WordListStudyText.frameNStart = frameN;  // exact frame index
      
      WordListStudyText.setAutoDraw(true);
    }
    
    
    // if WordListStudyText is active this frame...
    if (WordListStudyText.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (WordListStudyText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      WordListStudyText.tStop = t;  // not accounting for scr refresh
      WordListStudyText.frameNStop = frameN;  // exact frame index
      // update status
      WordListStudyText.status = PsychoJS.Status.FINISHED;
      WordListStudyText.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WordListStudyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WordListStudyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'WordListStudy' ---
    for (const thisComponent of WordListStudyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('WordListStudy.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (WordListStudyMaxDurationReached) {
        WordListStudyClock.add(WordListStudyMaxDuration);
    } else {
        WordListStudyClock.add(2.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var WordListDistractionMaxDurationReached;
var _SecretSkipButtonShhhhhh_3_allKeys;
var WordListDistractionMaxDuration;
var WordListDistractionComponents;
function WordListDistractionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'WordListDistraction' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    WordListDistractionClock.reset();
    routineTimer.reset();
    WordListDistractionMaxDurationReached = false;
    // update component parameters for each repeat
    SecretSkipButtonShhhhhh_3.keys = undefined;
    SecretSkipButtonShhhhhh_3.rt = undefined;
    _SecretSkipButtonShhhhhh_3_allKeys = [];
    psychoJS.experiment.addData('WordListDistraction.started', globalClock.getTime());
    WordListDistractionMaxDuration = null
    // keep track of which components have finished
    WordListDistractionComponents = [];
    WordListDistractionComponents.push(WordListDistractionText);
    WordListDistractionComponents.push(SecretSkipButtonShhhhhh_3);
    
    for (const thisComponent of WordListDistractionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function WordListDistractionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'WordListDistraction' ---
    // get current time
    t = WordListDistractionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *WordListDistractionText* updates
    if (t >= 0.0 && WordListDistractionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      WordListDistractionText.tStart = t;  // (not accounting for frame time here)
      WordListDistractionText.frameNStart = frameN;  // exact frame index
      
      WordListDistractionText.setAutoDraw(true);
    }
    
    
    // if WordListDistractionText is active this frame...
    if (WordListDistractionText.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 60 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (WordListDistractionText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      WordListDistractionText.tStop = t;  // not accounting for scr refresh
      WordListDistractionText.frameNStop = frameN;  // exact frame index
      // update status
      WordListDistractionText.status = PsychoJS.Status.FINISHED;
      WordListDistractionText.setAutoDraw(false);
    }
    
    
    // *SecretSkipButtonShhhhhh_3* updates
    if (t >= 0.0 && SecretSkipButtonShhhhhh_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SecretSkipButtonShhhhhh_3.tStart = t;  // (not accounting for frame time here)
      SecretSkipButtonShhhhhh_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { SecretSkipButtonShhhhhh_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { SecretSkipButtonShhhhhh_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { SecretSkipButtonShhhhhh_3.clearEvents(); });
    }
    
    // if SecretSkipButtonShhhhhh_3 is active this frame...
    if (SecretSkipButtonShhhhhh_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = SecretSkipButtonShhhhhh_3.getKeys({
        keyList: typeof '0' === 'string' ? ['0'] : '0', 
        waitRelease: false
      });
      _SecretSkipButtonShhhhhh_3_allKeys = _SecretSkipButtonShhhhhh_3_allKeys.concat(theseKeys);
      if (_SecretSkipButtonShhhhhh_3_allKeys.length > 0) {
        SecretSkipButtonShhhhhh_3.keys = _SecretSkipButtonShhhhhh_3_allKeys[_SecretSkipButtonShhhhhh_3_allKeys.length - 1].name;  // just the last key pressed
        SecretSkipButtonShhhhhh_3.rt = _SecretSkipButtonShhhhhh_3_allKeys[_SecretSkipButtonShhhhhh_3_allKeys.length - 1].rt;
        SecretSkipButtonShhhhhh_3.duration = _SecretSkipButtonShhhhhh_3_allKeys[_SecretSkipButtonShhhhhh_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WordListDistractionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WordListDistractionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'WordListDistraction' ---
    for (const thisComponent of WordListDistractionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('WordListDistraction.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(SecretSkipButtonShhhhhh_3.corr, level);
    }
    psychoJS.experiment.addData('SecretSkipButtonShhhhhh_3.keys', SecretSkipButtonShhhhhh_3.keys);
    if (typeof SecretSkipButtonShhhhhh_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('SecretSkipButtonShhhhhh_3.rt', SecretSkipButtonShhhhhh_3.rt);
        psychoJS.experiment.addData('SecretSkipButtonShhhhhh_3.duration', SecretSkipButtonShhhhhh_3.duration);
        routineTimer.reset();
        }
    
    SecretSkipButtonShhhhhh_3.stop();
    // the Routine "WordListDistraction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var WordListTestMaxDurationReached;
var current_button;
var current_label_text;
var clicked_button_flags;
var clicked_button_labels_in_order;
var num_columns;
var num_rows;
var button_gap;
var total_button_width;
var button_width;
var button_height;
var row_vertical_positions;
var dynamic_buttons;
var dynamic_button_texts;
var x_position;
var y_position;
var button_rect;
var button_label_text;
var button_labels;
var label_index;
var gotValidClick;
var WordListTestMaxDuration;
var WordListTestComponents;
function WordListTestRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'WordListTest' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    WordListTestClock.reset();
    routineTimer.reset();
    WordListTestMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from WordListTestCode
    current_button = 0;
    current_label_text = 0;
    clicked_button_flags = [false, false, false, false, false, false, false, false, false, false];
    clicked_button_labels_in_order = [];
    num_columns = 5;
    num_rows = 2;
    button_gap = 0.01;
    total_button_width = 1.6;
    button_width = ((total_button_width - ((num_columns - 1) * button_gap)) / num_columns);
    button_height = 0.08;
    row_vertical_positions = [(- 0.42), (- 0.32)];
    dynamic_buttons = [];
    dynamic_button_texts = [];
    x_position = 0;
    y_position = 0;
    button_rect = 0;
    button_label_text = 0;
    if (((ConditionVariable === 1) || (ConditionVariable === 3))) {
        button_labels = ["chair", "candle", "apple", "forest", "letter", "window", "island", "ladder", "mirror", "basket"];
    } else {
        button_labels = ["table", "pillow", "ocean", "eraser", "pocket", "dinner", "street", "laptop", "closet", "carpet"];
    }
    label_index = 0;
    for (var row_index, _pj_c = 0, _pj_a = util.range(num_rows), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        row_index = _pj_a[_pj_c];
        for (var col_index, _pj_f = 0, _pj_d = util.range(num_columns), _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
            col_index = _pj_d[_pj_f];
            x_position = ((((- total_button_width) / 2) + (button_width / 2)) + (col_index * (button_width + button_gap)));
            y_position = row_vertical_positions[row_index];
            button_rect = new visual.Rect({"win": psychoJS.window, "width": button_width, "height": button_height, "pos": [x_position, y_position], "fillColor": "gray", "lineColor": "white"});
            button_label_text = new visual.TextStim({"win": psychoJS.window, "text": button_labels[label_index], "pos": [x_position, y_position], "height": 0.035, "color": "white"});
            dynamic_buttons.push(button_rect);
            dynamic_button_texts.push(button_label_text);
            label_index += 1;
        }
    }
    
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('WordListTest.started', globalClock.getTime());
    WordListTestMaxDuration = null
    // keep track of which components have finished
    WordListTestComponents = [];
    WordListTestComponents.push(WordListTestText);
    WordListTestComponents.push(mouse);
    
    for (const thisComponent of WordListTestComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var all_clicked;
var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function WordListTestRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'WordListTest' ---
    // get current time
    t = WordListTestClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *WordListTestText* updates
    if (t >= 0.0 && WordListTestText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      WordListTestText.tStart = t;  // (not accounting for frame time here)
      WordListTestText.frameNStart = frameN;  // exact frame index
      
      WordListTestText.setAutoDraw(true);
    }
    
    
    // if WordListTestText is active this frame...
    if (WordListTestText.status === PsychoJS.Status.STARTED) {
    }
    
    // Run 'Each Frame' code from WordListTestCode
    for (var button_idx, _pj_c = 0, _pj_a = util.range(dynamic_buttons.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        button_idx = _pj_a[_pj_c];
        current_button = dynamic_buttons[button_idx];
        current_label_text = dynamic_button_texts[button_idx];
        if (clicked_button_flags[button_idx]) {
            current_button.fillColor = [0.5, 0.5, 0.5];
        } else {
            current_button.fillColor = "gray";
        }
        current_button.draw();
        current_label_text.draw();
    }
    if (mouse.getPressed()[0]) {
        for (var button_idx, _pj_c = 0, _pj_a = util.range(dynamic_buttons.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            button_idx = _pj_a[_pj_c];
            current_button = dynamic_buttons[button_idx];
            if (((! clicked_button_flags[button_idx]) && mouse.isPressedIn(current_button))) {
                clicked_button_flags[button_idx] = true;
                clicked_button_labels_in_order.push(button_labels[button_idx]);
                psychoJS.experiment.addData(`button_press`, button_labels[button_idx]);
                break;
            }
        }
    }
    all_clicked = true;
    for (var clicked_flag, _pj_c = 0, _pj_a = clicked_button_flags, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        clicked_flag = _pj_a[_pj_c];
        if ((! clicked_flag)) {
            all_clicked = false;
            break;
        }
    }
    if (all_clicked) {
        continueRoutine = false;
    }
    
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse is active this frame...
    if (mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WordListTestComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WordListTestRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'WordListTest' ---
    for (const thisComponent of WordListTestComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('WordListTest.stopped', globalClock.getTime());
    // Run 'End Routine' code from WordListTestCode
    for (var button_obj, _pj_c = 0, _pj_a = dynamic_buttons, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        button_obj = _pj_a[_pj_c];
        button_obj.setAutoDraw(false);
    }
    for (var label_obj, _pj_c = 0, _pj_a = dynamic_button_texts, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        label_obj = _pj_a[_pj_c];
        label_obj.setAutoDraw(false);
    }
    dynamic_buttons = [];
    dynamic_button_texts = [];
    clicked_button_flags = [];
    clicked_button_labels_in_order = [];
    
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    
    // the Routine "WordListTest" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BreakOrFinishMaxDurationReached;
var _SecretSkipButtonShhhhhh_2_allKeys;
var BreakOrFinishMaxDuration;
var BreakOrFinishComponents;
function BreakOrFinishRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'BreakOrFinish' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    BreakOrFinishClock.reset();
    routineTimer.reset();
    BreakOrFinishMaxDurationReached = false;
    // update component parameters for each repeat
    SecretSkipButtonShhhhhh_2.keys = undefined;
    SecretSkipButtonShhhhhh_2.rt = undefined;
    _SecretSkipButtonShhhhhh_2_allKeys = [];
    psychoJS.experiment.addData('BreakOrFinish.started', globalClock.getTime());
    // skip this Routine if its 'Skip if' condition is True
    continueRoutine = continueRoutine && !((LoopVariable == 1));
    maxDurationReached = false
    BreakOrFinishMaxDuration = null
    // keep track of which components have finished
    BreakOrFinishComponents = [];
    BreakOrFinishComponents.push(BreakText);
    BreakOrFinishComponents.push(SecretSkipButtonShhhhhh_2);
    
    for (const thisComponent of BreakOrFinishComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function BreakOrFinishRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'BreakOrFinish' ---
    // get current time
    t = BreakOrFinishClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *BreakText* updates
    if (t >= 0.0 && BreakText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BreakText.tStart = t;  // (not accounting for frame time here)
      BreakText.frameNStart = frameN;  // exact frame index
      
      BreakText.setAutoDraw(true);
    }
    
    
    // if BreakText is active this frame...
    if (BreakText.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 300 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (BreakText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      BreakText.tStop = t;  // not accounting for scr refresh
      BreakText.frameNStop = frameN;  // exact frame index
      // update status
      BreakText.status = PsychoJS.Status.FINISHED;
      BreakText.setAutoDraw(false);
    }
    
    
    // *SecretSkipButtonShhhhhh_2* updates
    if (t >= 0.0 && SecretSkipButtonShhhhhh_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SecretSkipButtonShhhhhh_2.tStart = t;  // (not accounting for frame time here)
      SecretSkipButtonShhhhhh_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { SecretSkipButtonShhhhhh_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { SecretSkipButtonShhhhhh_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { SecretSkipButtonShhhhhh_2.clearEvents(); });
    }
    
    // if SecretSkipButtonShhhhhh_2 is active this frame...
    if (SecretSkipButtonShhhhhh_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = SecretSkipButtonShhhhhh_2.getKeys({
        keyList: typeof '0' === 'string' ? ['0'] : '0', 
        waitRelease: false
      });
      _SecretSkipButtonShhhhhh_2_allKeys = _SecretSkipButtonShhhhhh_2_allKeys.concat(theseKeys);
      if (_SecretSkipButtonShhhhhh_2_allKeys.length > 0) {
        SecretSkipButtonShhhhhh_2.keys = _SecretSkipButtonShhhhhh_2_allKeys[_SecretSkipButtonShhhhhh_2_allKeys.length - 1].name;  // just the last key pressed
        SecretSkipButtonShhhhhh_2.rt = _SecretSkipButtonShhhhhh_2_allKeys[_SecretSkipButtonShhhhhh_2_allKeys.length - 1].rt;
        SecretSkipButtonShhhhhh_2.duration = _SecretSkipButtonShhhhhh_2_allKeys[_SecretSkipButtonShhhhhh_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BreakOrFinishComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var LoopVariable;
var WordListVariable;
function BreakOrFinishRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BreakOrFinish' ---
    for (const thisComponent of BreakOrFinishComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('BreakOrFinish.stopped', globalClock.getTime());
    // Run 'End Routine' code from BreakCode
    if ((ConditionVariable === 1)) {
        ConditionVariable = 4;
    } else {
        if ((ConditionVariable === 2)) {
            ConditionVariable = 3;
        } else {
            if ((ConditionVariable === 3)) {
                ConditionVariable = 2;
            } else {
                if ((ConditionVariable === 4)) {
                    ConditionVariable = 1;
                }
            }
        }
    }
    LoopVariable = 1;
    WordListVariable = [];
    
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(SecretSkipButtonShhhhhh_2.corr, level);
    }
    psychoJS.experiment.addData('SecretSkipButtonShhhhhh_2.keys', SecretSkipButtonShhhhhh_2.keys);
    if (typeof SecretSkipButtonShhhhhh_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('SecretSkipButtonShhhhhh_2.rt', SecretSkipButtonShhhhhh_2.rt);
        psychoJS.experiment.addData('SecretSkipButtonShhhhhh_2.duration', SecretSkipButtonShhhhhh_2.duration);
        routineTimer.reset();
        }
    
    SecretSkipButtonShhhhhh_2.stop();
    // the Routine "BreakOrFinish" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var EndScreenMaxDurationReached;
var EndScreenMaxDuration;
var EndScreenComponents;
function EndScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'EndScreen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    EndScreenClock.reset();
    routineTimer.reset();
    EndScreenMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0; 
    
    // Generate filename for results
    let filename = NameVariable + '_' + psychoJS._experiment._datetime + '.csv';
    
    // Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    
    // Convert data object to CSV
    let data = psychoJS.experiment.getResultAsCsv();
    
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({
            experimentID: 'sg2ZTqdg0Xss', // ⭑ UPDATE WITH YOUR DATAPIPE EXPERIMENT ID ⭑
            filename: filename,
            data: data,
        }),
    }).then(response => response.json()).then(data => {
        // Log response and force experiment end
        console.log(data);
        quitPsychoJS();
    })
    psychoJS.experiment.addData('EndScreen.started', globalClock.getTime());
    EndScreenMaxDuration = null
    // keep track of which components have finished
    EndScreenComponents = [];
    EndScreenComponents.push(EndScreenText);
    
    for (const thisComponent of EndScreenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function EndScreenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'EndScreen' ---
    // get current time
    t = EndScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *EndScreenText* updates
    if (t >= 0.0 && EndScreenText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      EndScreenText.tStart = t;  // (not accounting for frame time here)
      EndScreenText.frameNStart = frameN;  // exact frame index
      
      EndScreenText.setAutoDraw(true);
    }
    
    
    // if EndScreenText is active this frame...
    if (EndScreenText.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of EndScreenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndScreenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'EndScreen' ---
    for (const thisComponent of EndScreenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('EndScreen.stopped', globalClock.getTime());
    // the Routine "EndScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
