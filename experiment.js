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
// Run 'Before Experiment' code from code
condition = 0;

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
    {'name': 'screenshotspreadsheet.csv', 'path': 'screenshotspreadsheet.csv'},
    {'name': 'wordlistspreadsheets.csv', 'path': 'wordlistspreadsheets.csv'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
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
var ScreenshotResources;
var WelcomeScreenKeyboard;
var ConditionSelectionClock;
var ConditionSelectionText;
var ConditionSelectionKeyboard;
var VideoInstructionsClock;
var VideoInstructionsText;
var VideoInstructionsKeyboard;
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
var WordListTestClock;
var BreakOrFinishClock;
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
    text: 'Welcome to the experiment!\n\n(Ethics)\n(Important Information)\n\nPress SPACE to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  ScreenshotResources = {
    status: PsychoJS.Status.NOT_STARTED
  };
  WelcomeScreenKeyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ConditionSelection"
  ConditionSelectionClock = new util.Clock();
  ConditionSelectionText = new visual.TextStim({
    win: psychoJS.window,
    name: 'ConditionSelectionText',
    text: 'If you were assigned to condition 1 press a.\nIf you were assigned to condition 2 press d.\n\nIf you are not sure which condition you were assigned to, please ask the experimenter.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  ConditionSelectionKeyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
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
  
  // Initialize components for Routine "ScreenshotInstructions"
  ScreenshotInstructionsClock = new util.Clock();
  ScreenshotInstructionsText = new visual.TextStim({
    win: psychoJS.window,
    name: 'ScreenshotInstructionsText',
    text: 'You will be shown two images. \nPlease indicate which one came first in the video.\nPress a for the left image and d for the right image.\nPress SPACE to continue',
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
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.3), 0], 
    draggable: false,
    size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  ScreenshotRight = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ScreenshotRight', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.3, 0], 
    draggable: false,
    size : [0.5, 0.5],
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
    text: 'You will now be shown a number of different words.\n\nPress SPACE to continue',
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
  WordListDistractionText.setText(`Count backwards by 3 from ${util.randint(100, 1000)} out loud`);
  
  // Initialize components for Routine "WordListTest"
  WordListTestClock = new util.Clock();
  // Initialize components for Routine "BreakOrFinish"
  BreakOrFinishClock = new util.Clock();
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
    WelcomeScreenComponents.push(ScreenshotResources);
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
    
    // start downloading resources specified by component ScreenshotResources
    if (t >= null && ScreenshotResources.status === PsychoJS.Status.NOT_STARTED) {
      console.log('register and start downloading resources specified by component ScreenshotResources');
      await psychoJS.serverManager.prepareResources(['Screenshots/new1.jpg','Screenshots/new2.jpg','Screenshots/old1.jpg','Screenshots/old2.jpg']);
      ScreenshotResources.status = PsychoJS.Status.STARTED;
    }
    // check on the resources specified by component ScreenshotResources
    if (t >= null && ScreenshotResources.status === PsychoJS.Status.STARTED) {
      if (psychoJS.serverManager.getResourceStatus(['Screenshots/new1.jpg','Screenshots/new2.jpg','Screenshots/old1.jpg','Screenshots/old2.jpg']) === core.ServerManager.ResourceStatus.DOWNLOADED) {
        console.log('finished downloading resources specified by component ScreenshotResources');
        ScreenshotResources.status = PsychoJS.Status.FINISHED;
      } else {
        console.log('resource specified in ScreenshotResources took longer than expected to download');
      }
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
var _ConditionSelectionKeyboard_allKeys;
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
    ConditionSelectionKeyboard.keys = undefined;
    ConditionSelectionKeyboard.rt = undefined;
    _ConditionSelectionKeyboard_allKeys = [];
    psychoJS.experiment.addData('ConditionSelection.started', globalClock.getTime());
    ConditionSelectionMaxDuration = null
    // keep track of which components have finished
    ConditionSelectionComponents = [];
    ConditionSelectionComponents.push(ConditionSelectionText);
    ConditionSelectionComponents.push(ConditionSelectionKeyboard);
    
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
    
    
    // *ConditionSelectionKeyboard* updates
    if (t >= 0.0 && ConditionSelectionKeyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ConditionSelectionKeyboard.tStart = t;  // (not accounting for frame time here)
      ConditionSelectionKeyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { ConditionSelectionKeyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { ConditionSelectionKeyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { ConditionSelectionKeyboard.clearEvents(); });
    }
    
    // if ConditionSelectionKeyboard is active this frame...
    if (ConditionSelectionKeyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = ConditionSelectionKeyboard.getKeys({
        keyList: typeof ['a','d'] === 'string' ? [['a','d']] : ['a','d'], 
        waitRelease: false
      });
      _ConditionSelectionKeyboard_allKeys = _ConditionSelectionKeyboard_allKeys.concat(theseKeys);
      if (_ConditionSelectionKeyboard_allKeys.length > 0) {
        ConditionSelectionKeyboard.keys = _ConditionSelectionKeyboard_allKeys[_ConditionSelectionKeyboard_allKeys.length - 1].name;  // just the last key pressed
        ConditionSelectionKeyboard.rt = _ConditionSelectionKeyboard_allKeys[_ConditionSelectionKeyboard_allKeys.length - 1].rt;
        ConditionSelectionKeyboard.duration = _ConditionSelectionKeyboard_allKeys[_ConditionSelectionKeyboard_allKeys.length - 1].duration;
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


var condition;
function ConditionSelectionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ConditionSelection' ---
    for (const thisComponent of ConditionSelectionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ConditionSelection.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(ConditionSelectionKeyboard.corr, level);
    }
    psychoJS.experiment.addData('ConditionSelectionKeyboard.keys', ConditionSelectionKeyboard.keys);
    if (typeof ConditionSelectionKeyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('ConditionSelectionKeyboard.rt', ConditionSelectionKeyboard.rt);
        psychoJS.experiment.addData('ConditionSelectionKeyboard.duration', ConditionSelectionKeyboard.duration);
        routineTimer.reset();
        }
    
    ConditionSelectionKeyboard.stop();
    // Run 'End Routine' code from code
    if ((ConditionSelectionKeyboard.keys === "a")) {
        condition = 1;
    } else {
        if ((ConditionSelectionKeyboard.keys === "d")) {
            condition = 2;
        }
    }
    
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
      WithinSubjectsLoopScheduler.add(VideoInstructionsRoutineBegin(snapshot));
      WithinSubjectsLoopScheduler.add(VideoInstructionsRoutineEachFrame());
      WithinSubjectsLoopScheduler.add(VideoInstructionsRoutineEnd(snapshot));
      WithinSubjectsLoopScheduler.add(ScreenshotInstructionsRoutineBegin(snapshot));
      WithinSubjectsLoopScheduler.add(ScreenshotInstructionsRoutineEachFrame());
      WithinSubjectsLoopScheduler.add(ScreenshotInstructionsRoutineEnd(snapshot));
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


var ScreenshotOrderTrial;
function ScreenshotOrderTrialLoopBegin(ScreenshotOrderTrialLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    ScreenshotOrderTrial = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
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
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'wordlistspreadsheets.csv',
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
    // Run 'Begin Routine' code from code_2
    if ((condition === 1)) {
        VideoInstructionsText.setText("Please take out your phone and go the Instagram account @[Account Name]\n Please watch every video in order from top to bottom with the volume on.\n You must finish each video before scrolling to the next and only watch each video once.\n\n Press spacebar when you are finished!");
    } else {
        VideoInstructionsText.setText("Please take out your phone and go to the YouTube channel @[Channel Name]\n You should watch the video [Video Name] in fullscreen with the volume on until it is complete.\n\n Press space when you are finished.");
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
    ScreenshotLeft.setImage(`Screenshots/${Condition1New}`);
    ScreenshotRight.setImage(`Screenshots/${Condition1Old}`);
    ScreenshotKeyboard.keys = undefined;
    ScreenshotKeyboard.rt = undefined;
    _ScreenshotKeyboard_allKeys = [];
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
    routineTimer.add(1.000000);
    WordListStudyMaxDurationReached = false;
    // update component parameters for each repeat
    WordListStudyText.setText(FirstList);
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
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
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
        WordListStudyClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var WordListDistractionMaxDurationReached;
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
    WordListDistractionClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    WordListDistractionMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('WordListDistraction.started', globalClock.getTime());
    WordListDistractionMaxDuration = null
    // keep track of which components have finished
    WordListDistractionComponents = [];
    WordListDistractionComponents.push(WordListDistractionText);
    
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
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (WordListDistractionText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      WordListDistractionText.tStop = t;  // not accounting for scr refresh
      WordListDistractionText.frameNStop = frameN;  // exact frame index
      // update status
      WordListDistractionText.status = PsychoJS.Status.FINISHED;
      WordListDistractionText.setAutoDraw(false);
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
    if (continueRoutine && routineTimer.getTime() > 0) {
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
    if (routineForceEnded) {
        routineTimer.reset();} else if (WordListDistractionMaxDurationReached) {
        WordListDistractionClock.add(WordListDistractionMaxDuration);
    } else {
        WordListDistractionClock.add(1.000000);
    }
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
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    
    // Extract data object from experiment
    let dataObj = psychoJS._experiment._trialsData;
    
    // Convert data object to CSV
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString()
    }).join('\n')
    
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
