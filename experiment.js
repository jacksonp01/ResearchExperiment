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
    'session': '001',
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












flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'screenshotspreadsheet.csv', 'path': 'screenshotspreadsheet.csv'},
    {'name': 'Screenshots/new1.jpg', 'path': 'Screenshots/new1.jpg'},
    {'name': 'Screenshots/old1.jpg', 'path': 'Screenshots/old1.jpg'},
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
var ContinueButton;
var ConditionSelectionClock;
var ConditionSelectionText;
var Condition1Button;
var Condition2Button;
var StimulusLinkClock;
var InstructionText;
var StimulusLinkButton;
var ScreenshotOrderTaskClock;
var ScreenshotLeft;
var ScreenshotRight;
var ScreenshotLeftButton;
var WordListInstructionsClock;
var WordListStudyClock;
var DistractionTaskClock;
var WordListTestClock;
var BreakOrFinishClock;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "WelcomeScreen"
  WelcomeScreenClock = new util.Clock();
  WelcomeText = new visual.TextStim({
    win: psychoJS.window,
    name: 'WelcomeText',
    text: 'Welcome to the experiment!\n\n(Ethics)\n(Important Information)',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  ContinueButton = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ContinueButton',
    text: 'Click to continue',
    font: 'Arvo',
    pos: [0, (- 0.3)],
    size: [0.5, 0.2],
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
  ContinueButton.clock = new util.Clock();
  
  // Initialize components for Routine "ConditionSelection"
  ConditionSelectionClock = new util.Clock();
  ConditionSelectionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'ConditionSelectionText',
    text: 'Click the button below that corresponds to the condition you were assigned. If you are not sure, please ask the experimenter.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  Condition1Button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'Condition1Button',
    text: '1',
    font: 'Arvo',
    pos: [(- 0.3), (- 0.3)],
    size: [0.2, 0.2],
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
  Condition1Button.clock = new util.Clock();
  
  Condition2Button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'Condition2Button',
    text: '2',
    font: 'Arvo',
    pos: [0.3, (- 0.3)],
    size: [0.2, 0.2],
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
  Condition2Button.clock = new util.Clock();
  
  // Initialize components for Routine "StimulusLink"
  StimulusLinkClock = new util.Clock();
  InstructionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'InstructionText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  StimulusLinkButton = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'StimulusLinkButton',
    text: 'Click to continue',
    font: 'Arvo',
    pos: [0, (- 0.3)],
    size: [0.5, 0.2],
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
  StimulusLinkButton.clock = new util.Clock();
  
  // Initialize components for Routine "ScreenshotOrderTask"
  ScreenshotOrderTaskClock = new util.Clock();
  ScreenshotLeft = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ScreenshotLeft', units : undefined, 
    image : 'Screenshots/new1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  ScreenshotRight = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ScreenshotRight', units : undefined, 
    image : 'Screenshots/old1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  ScreenshotLeftButton = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'ScreenshotLeftButton',
    text: 'Click here',
    font: 'Arvo',
    pos: [0, 0],
    size: [0.5, 0.5],
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
  ScreenshotLeftButton.clock = new util.Clock();
  
  // Initialize components for Routine "WordListInstructions"
  WordListInstructionsClock = new util.Clock();
  // Initialize components for Routine "WordListStudy"
  WordListStudyClock = new util.Clock();
  // Initialize components for Routine "DistractionTask"
  DistractionTaskClock = new util.Clock();
  // Initialize components for Routine "WordListTest"
  WordListTestClock = new util.Clock();
  // Initialize components for Routine "BreakOrFinish"
  BreakOrFinishClock = new util.Clock();
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
    // reset ContinueButton to account for continued clicks & clear times on/off
    ContinueButton.reset()
    psychoJS.experiment.addData('WelcomeScreen.started', globalClock.getTime());
    WelcomeScreenMaxDuration = null
    // keep track of which components have finished
    WelcomeScreenComponents = [];
    WelcomeScreenComponents.push(WelcomeText);
    WelcomeScreenComponents.push(ContinueButton);
    
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
    
    
    // *ContinueButton* updates
    if (t >= 0 && ContinueButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ContinueButton.tStart = t;  // (not accounting for frame time here)
      ContinueButton.frameNStart = frameN;  // exact frame index
      
      ContinueButton.setAutoDraw(true);
    }
    
    
    // if ContinueButton is active this frame...
    if (ContinueButton.status === PsychoJS.Status.STARTED) {
    }
    
    if (ContinueButton.status === PsychoJS.Status.STARTED) {
      // check whether ContinueButton has been pressed
      if (ContinueButton.isClicked) {
        if (!ContinueButton.wasClicked) {
          // store time of first click
          ContinueButton.timesOn.push(ContinueButton.clock.getTime());
          // store time clicked until
          ContinueButton.timesOff.push(ContinueButton.clock.getTime());
        } else {
          // update time clicked until;
          ContinueButton.timesOff[ContinueButton.timesOff.length - 1] = ContinueButton.clock.getTime();
        }
        if (!ContinueButton.wasClicked) {
          // end routine when ContinueButton is clicked
          continueRoutine = false;
          
        }
        // if ContinueButton is still clicked next frame, it is not a new click
        ContinueButton.wasClicked = true;
      } else {
        // if ContinueButton is clicked next frame, it is a new click
        ContinueButton.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ContinueButton hasn't started / has finished
      ContinueButton.clock.reset();
      // if ContinueButton is clicked next frame, it is a new click
      ContinueButton.wasClicked = false;
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
    psychoJS.experiment.addData('ContinueButton.numClicks', ContinueButton.numClicks);
    psychoJS.experiment.addData('ContinueButton.timesOn', ContinueButton.timesOn);
    psychoJS.experiment.addData('ContinueButton.timesOff', ContinueButton.timesOff);
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
    // reset Condition1Button to account for continued clicks & clear times on/off
    Condition1Button.reset()
    // reset Condition2Button to account for continued clicks & clear times on/off
    Condition2Button.reset()
    psychoJS.experiment.addData('ConditionSelection.started', globalClock.getTime());
    ConditionSelectionMaxDuration = null
    // keep track of which components have finished
    ConditionSelectionComponents = [];
    ConditionSelectionComponents.push(ConditionSelectionText);
    ConditionSelectionComponents.push(Condition1Button);
    ConditionSelectionComponents.push(Condition2Button);
    
    for (const thisComponent of ConditionSelectionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


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
    
    
    // *Condition1Button* updates
    if (t >= 0 && Condition1Button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Condition1Button.tStart = t;  // (not accounting for frame time here)
      Condition1Button.frameNStart = frameN;  // exact frame index
      
      Condition1Button.setAutoDraw(true);
    }
    
    
    // if Condition1Button is active this frame...
    if (Condition1Button.status === PsychoJS.Status.STARTED) {
    }
    
    if (Condition1Button.status === PsychoJS.Status.STARTED) {
      // check whether Condition1Button has been pressed
      if (Condition1Button.isClicked) {
        if (!Condition1Button.wasClicked) {
          // store time of first click
          Condition1Button.timesOn.push(Condition1Button.clock.getTime());
          // store time clicked until
          Condition1Button.timesOff.push(Condition1Button.clock.getTime());
        } else {
          // update time clicked until;
          Condition1Button.timesOff[Condition1Button.timesOff.length - 1] = Condition1Button.clock.getTime();
        }
        if (!Condition1Button.wasClicked) {
          // end routine when Condition1Button is clicked
          continueRoutine = false;
          InstructionText.setText("Please take out your phone and go the Instagram account @[Account Name]\n Please watch every video in order from top to bottom with the volume on. You must finish each video before scrolling to the next and only watch each video once.\n Click continue when you are finished!");
        }
        // if Condition1Button is still clicked next frame, it is not a new click
        Condition1Button.wasClicked = true;
      } else {
        // if Condition1Button is clicked next frame, it is a new click
        Condition1Button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if Condition1Button hasn't started / has finished
      Condition1Button.clock.reset();
      // if Condition1Button is clicked next frame, it is a new click
      Condition1Button.wasClicked = false;
    }
    
    // *Condition2Button* updates
    if (t >= 0 && Condition2Button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Condition2Button.tStart = t;  // (not accounting for frame time here)
      Condition2Button.frameNStart = frameN;  // exact frame index
      
      Condition2Button.setAutoDraw(true);
    }
    
    
    // if Condition2Button is active this frame...
    if (Condition2Button.status === PsychoJS.Status.STARTED) {
    }
    
    if (Condition2Button.status === PsychoJS.Status.STARTED) {
      // check whether Condition2Button has been pressed
      if (Condition2Button.isClicked) {
        if (!Condition2Button.wasClicked) {
          // store time of first click
          Condition2Button.timesOn.push(Condition2Button.clock.getTime());
          // store time clicked until
          Condition2Button.timesOff.push(Condition2Button.clock.getTime());
        } else {
          // update time clicked until;
          Condition2Button.timesOff[Condition2Button.timesOff.length - 1] = Condition2Button.clock.getTime();
        }
        if (!Condition2Button.wasClicked) {
          // end routine when Condition2Button is clicked
          continueRoutine = false;
          InstructionText.setText("Please take out your phone and go to the YouTube channel @[Channel Name]\n You should watch the video [Video Name] in fullscreen with the volume on until it is complete.\n Click continue when you are finished.");
        }
        // if Condition2Button is still clicked next frame, it is not a new click
        Condition2Button.wasClicked = true;
      } else {
        // if Condition2Button is clicked next frame, it is a new click
        Condition2Button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if Condition2Button hasn't started / has finished
      Condition2Button.clock.reset();
      // if Condition2Button is clicked next frame, it is a new click
      Condition2Button.wasClicked = false;
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
    psychoJS.experiment.addData('Condition1Button.numClicks', Condition1Button.numClicks);
    psychoJS.experiment.addData('Condition1Button.timesOn', Condition1Button.timesOn);
    psychoJS.experiment.addData('Condition1Button.timesOff', Condition1Button.timesOff);
    psychoJS.experiment.addData('Condition2Button.numClicks', Condition2Button.numClicks);
    psychoJS.experiment.addData('Condition2Button.timesOn', Condition2Button.timesOn);
    psychoJS.experiment.addData('Condition2Button.timesOff', Condition2Button.timesOff);
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
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
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
      WithinSubjectsLoopScheduler.add(StimulusLinkRoutineBegin(snapshot));
      WithinSubjectsLoopScheduler.add(StimulusLinkRoutineEachFrame());
      WithinSubjectsLoopScheduler.add(StimulusLinkRoutineEnd(snapshot));
      const ScreenshotOrderTrialLoopScheduler = new Scheduler(psychoJS);
      WithinSubjectsLoopScheduler.add(ScreenshotOrderTrialLoopBegin(ScreenshotOrderTrialLoopScheduler, snapshot));
      WithinSubjectsLoopScheduler.add(ScreenshotOrderTrialLoopScheduler);
      WithinSubjectsLoopScheduler.add(ScreenshotOrderTrialLoopEnd);
      WithinSubjectsLoopScheduler.add(WordListInstructionsRoutineBegin(snapshot));
      WithinSubjectsLoopScheduler.add(WordListInstructionsRoutineEachFrame());
      WithinSubjectsLoopScheduler.add(WordListInstructionsRoutineEnd(snapshot));
      const WordListTrialLoopScheduler = new Scheduler(psychoJS);
      WithinSubjectsLoopScheduler.add(WordListTrialLoopBegin(WordListTrialLoopScheduler, snapshot));
      WithinSubjectsLoopScheduler.add(WordListTrialLoopScheduler);
      WithinSubjectsLoopScheduler.add(WordListTrialLoopEnd);
      WithinSubjectsLoopScheduler.add(DistractionTaskRoutineBegin(snapshot));
      WithinSubjectsLoopScheduler.add(DistractionTaskRoutineEachFrame());
      WithinSubjectsLoopScheduler.add(DistractionTaskRoutineEnd(snapshot));
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


var ScreenshotOrderTrial;
function ScreenshotOrderTrialLoopBegin(ScreenshotOrderTrialLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    ScreenshotOrderTrial = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'screenshotspreadsheet.csv',
      seed: undefined, name: 'ScreenshotOrderTrial'
    });
    psychoJS.experiment.addLoop(ScreenshotOrderTrial); // add the loop to the experiment
    currentLoop = ScreenshotOrderTrial;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisScreenshotOrderTrial of ScreenshotOrderTrial) {
      snapshot = ScreenshotOrderTrial.getSnapshot();
      ScreenshotOrderTrialLoopScheduler.add(importConditions(snapshot));
      ScreenshotOrderTrialLoopScheduler.add(ScreenshotOrderTaskRoutineBegin(snapshot));
      ScreenshotOrderTrialLoopScheduler.add(ScreenshotOrderTaskRoutineEachFrame());
      ScreenshotOrderTrialLoopScheduler.add(ScreenshotOrderTaskRoutineEnd(snapshot));
      ScreenshotOrderTrialLoopScheduler.add(ScreenshotOrderTrialLoopEndIteration(ScreenshotOrderTrialLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function ScreenshotOrderTrialLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(ScreenshotOrderTrial);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function ScreenshotOrderTrialLoopEndIteration(scheduler, snapshot) {
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


var WordListTrial;
function WordListTrialLoopBegin(WordListTrialLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    WordListTrial = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 10, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'WordListTrial'
    });
    psychoJS.experiment.addLoop(WordListTrial); // add the loop to the experiment
    currentLoop = WordListTrial;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisWordListTrial of WordListTrial) {
      snapshot = WordListTrial.getSnapshot();
      WordListTrialLoopScheduler.add(importConditions(snapshot));
      WordListTrialLoopScheduler.add(WordListStudyRoutineBegin(snapshot));
      WordListTrialLoopScheduler.add(WordListStudyRoutineEachFrame());
      WordListTrialLoopScheduler.add(WordListStudyRoutineEnd(snapshot));
      WordListTrialLoopScheduler.add(WordListTrialLoopEndIteration(WordListTrialLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function WordListTrialLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(WordListTrial);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function WordListTrialLoopEndIteration(scheduler, snapshot) {
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


var StimulusLinkMaxDurationReached;
var StimulusLinkMaxDuration;
var StimulusLinkComponents;
function StimulusLinkRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'StimulusLink' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    StimulusLinkClock.reset();
    routineTimer.reset();
    StimulusLinkMaxDurationReached = false;
    // update component parameters for each repeat
    // reset StimulusLinkButton to account for continued clicks & clear times on/off
    StimulusLinkButton.reset()
    psychoJS.experiment.addData('StimulusLink.started', globalClock.getTime());
    StimulusLinkMaxDuration = null
    // keep track of which components have finished
    StimulusLinkComponents = [];
    StimulusLinkComponents.push(InstructionText);
    StimulusLinkComponents.push(StimulusLinkButton);
    
    for (const thisComponent of StimulusLinkComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function StimulusLinkRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'StimulusLink' ---
    // get current time
    t = StimulusLinkClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *InstructionText* updates
    if (t >= 0.0 && InstructionText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InstructionText.tStart = t;  // (not accounting for frame time here)
      InstructionText.frameNStart = frameN;  // exact frame index
      
      InstructionText.setAutoDraw(true);
    }
    
    
    // if InstructionText is active this frame...
    if (InstructionText.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *StimulusLinkButton* updates
    if (t >= 0 && StimulusLinkButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      StimulusLinkButton.tStart = t;  // (not accounting for frame time here)
      StimulusLinkButton.frameNStart = frameN;  // exact frame index
      
      StimulusLinkButton.setAutoDraw(true);
    }
    
    
    // if StimulusLinkButton is active this frame...
    if (StimulusLinkButton.status === PsychoJS.Status.STARTED) {
    }
    
    if (StimulusLinkButton.status === PsychoJS.Status.STARTED) {
      // check whether StimulusLinkButton has been pressed
      if (StimulusLinkButton.isClicked) {
        if (!StimulusLinkButton.wasClicked) {
          // store time of first click
          StimulusLinkButton.timesOn.push(StimulusLinkButton.clock.getTime());
          // store time clicked until
          StimulusLinkButton.timesOff.push(StimulusLinkButton.clock.getTime());
        } else {
          // update time clicked until;
          StimulusLinkButton.timesOff[StimulusLinkButton.timesOff.length - 1] = StimulusLinkButton.clock.getTime();
        }
        if (!StimulusLinkButton.wasClicked) {
          // end routine when StimulusLinkButton is clicked
          continueRoutine = false;
          
        }
        // if StimulusLinkButton is still clicked next frame, it is not a new click
        StimulusLinkButton.wasClicked = true;
      } else {
        // if StimulusLinkButton is clicked next frame, it is a new click
        StimulusLinkButton.wasClicked = false;
      }
    } else {
      // keep clock at 0 if StimulusLinkButton hasn't started / has finished
      StimulusLinkButton.clock.reset();
      // if StimulusLinkButton is clicked next frame, it is a new click
      StimulusLinkButton.wasClicked = false;
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
    for (const thisComponent of StimulusLinkComponents)
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


function StimulusLinkRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'StimulusLink' ---
    for (const thisComponent of StimulusLinkComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('StimulusLink.stopped', globalClock.getTime());
    psychoJS.experiment.addData('StimulusLinkButton.numClicks', StimulusLinkButton.numClicks);
    psychoJS.experiment.addData('StimulusLinkButton.timesOn', StimulusLinkButton.timesOn);
    psychoJS.experiment.addData('StimulusLinkButton.timesOff', StimulusLinkButton.timesOff);
    // the Routine "StimulusLink" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ScreenshotOrderTaskMaxDurationReached;
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
    // reset ScreenshotLeftButton to account for continued clicks & clear times on/off
    ScreenshotLeftButton.reset()
    psychoJS.experiment.addData('ScreenshotOrderTask.started', globalClock.getTime());
    ScreenshotOrderTaskMaxDuration = null
    // keep track of which components have finished
    ScreenshotOrderTaskComponents = [];
    ScreenshotOrderTaskComponents.push(ScreenshotLeft);
    ScreenshotOrderTaskComponents.push(ScreenshotRight);
    ScreenshotOrderTaskComponents.push(ScreenshotLeftButton);
    
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
    
    
    // *ScreenshotLeftButton* updates
    if (t >= 0 && ScreenshotLeftButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ScreenshotLeftButton.tStart = t;  // (not accounting for frame time here)
      ScreenshotLeftButton.frameNStart = frameN;  // exact frame index
      
      ScreenshotLeftButton.setAutoDraw(true);
    }
    
    
    // if ScreenshotLeftButton is active this frame...
    if (ScreenshotLeftButton.status === PsychoJS.Status.STARTED) {
    }
    
    if (ScreenshotLeftButton.status === PsychoJS.Status.STARTED) {
      // check whether ScreenshotLeftButton has been pressed
      if (ScreenshotLeftButton.isClicked) {
        if (!ScreenshotLeftButton.wasClicked) {
          // store time of first click
          ScreenshotLeftButton.timesOn.push(ScreenshotLeftButton.clock.getTime());
          // store time clicked until
          ScreenshotLeftButton.timesOff.push(ScreenshotLeftButton.clock.getTime());
        } else {
          // update time clicked until;
          ScreenshotLeftButton.timesOff[ScreenshotLeftButton.timesOff.length - 1] = ScreenshotLeftButton.clock.getTime();
        }
        if (!ScreenshotLeftButton.wasClicked) {
          // end routine when ScreenshotLeftButton is clicked
          continueRoutine = false;
          
        }
        // if ScreenshotLeftButton is still clicked next frame, it is not a new click
        ScreenshotLeftButton.wasClicked = true;
      } else {
        // if ScreenshotLeftButton is clicked next frame, it is a new click
        ScreenshotLeftButton.wasClicked = false;
      }
    } else {
      // keep clock at 0 if ScreenshotLeftButton hasn't started / has finished
      ScreenshotLeftButton.clock.reset();
      // if ScreenshotLeftButton is clicked next frame, it is a new click
      ScreenshotLeftButton.wasClicked = false;
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
    psychoJS.experiment.addData('ScreenshotLeftButton.numClicks', ScreenshotLeftButton.numClicks);
    psychoJS.experiment.addData('ScreenshotLeftButton.timesOn', ScreenshotLeftButton.timesOn);
    psychoJS.experiment.addData('ScreenshotLeftButton.timesOff', ScreenshotLeftButton.timesOff);
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
    psychoJS.experiment.addData('WordListInstructions.started', globalClock.getTime());
    WordListInstructionsMaxDuration = null
    // keep track of which components have finished
    WordListInstructionsComponents = [];
    
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
    WordListStudyClock.reset();
    routineTimer.reset();
    WordListStudyMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('WordListStudy.started', globalClock.getTime());
    WordListStudyMaxDuration = null
    // keep track of which components have finished
    WordListStudyComponents = [];
    
    for (const thisComponent of WordListStudyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function WordListStudyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'WordListStudy' ---
    // get current time
    t = WordListStudyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
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
    if (continueRoutine) {
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
    // the Routine "WordListStudy" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var DistractionTaskMaxDurationReached;
var DistractionTaskMaxDuration;
var DistractionTaskComponents;
function DistractionTaskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'DistractionTask' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    DistractionTaskClock.reset();
    routineTimer.reset();
    DistractionTaskMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('DistractionTask.started', globalClock.getTime());
    DistractionTaskMaxDuration = null
    // keep track of which components have finished
    DistractionTaskComponents = [];
    
    for (const thisComponent of DistractionTaskComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function DistractionTaskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'DistractionTask' ---
    // get current time
    t = DistractionTaskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
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
    for (const thisComponent of DistractionTaskComponents)
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


function DistractionTaskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'DistractionTask' ---
    for (const thisComponent of DistractionTaskComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('DistractionTask.stopped', globalClock.getTime());
    // the Routine "DistractionTask" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var WordListTestMaxDurationReached;
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
    psychoJS.experiment.addData('WordListTest.started', globalClock.getTime());
    WordListTestMaxDuration = null
    // keep track of which components have finished
    WordListTestComponents = [];
    
    for (const thisComponent of WordListTestComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function WordListTestRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'WordListTest' ---
    // get current time
    t = WordListTestClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
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
    psychoJS.experiment.addData('BreakOrFinish.started', globalClock.getTime());
    BreakOrFinishMaxDuration = null
    // keep track of which components have finished
    BreakOrFinishComponents = [];
    
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


function BreakOrFinishRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'BreakOrFinish' ---
    for (const thisComponent of BreakOrFinishComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('BreakOrFinish.stopped', globalClock.getTime());
    // the Routine "BreakOrFinish" was not non-slip safe, so reset the non-slip timer
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
