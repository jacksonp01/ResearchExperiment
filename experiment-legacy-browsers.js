/******************* 
 * Experiment *
 *******************/


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
var WelcomeContinueButton;
var ScreenshotResources;
var ConditionSelectionClock;
var ConditionSelectionText;
var Condition1Button;
var Condition2Button;
var VideoInstructionsClock;
var VideoInstructionsText;
var VideoInstructionsContinueButton;
var ScreenshotOrderTaskClock;
var ScreenshotLeft;
var ScreenshotRight;
var mouse;
var WordListInstructionsClock;
var WordListInstructionsText;
var WordListInstructionsContinueButton;
var WordListStudyClock;
var WordListStudyText;
var WordListDistractionClock;
var WordListDistractionText;
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
  
  WelcomeContinueButton = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'WelcomeContinueButton',
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
  WelcomeContinueButton.clock = new util.Clock();
  
  ScreenshotResources = {
    status: PsychoJS.Status.NOT_STARTED
  };
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
  
  // Initialize components for Routine "VideoInstructions"
  VideoInstructionsClock = new util.Clock();
  VideoInstructionsText = new visual.TextStim({
    win: psychoJS.window,
    name: 'VideoInstructionsText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  VideoInstructionsContinueButton = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'VideoInstructionsContinueButton',
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
  VideoInstructionsContinueButton.clock = new util.Clock();
  
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
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "WordListInstructions"
  WordListInstructionsClock = new util.Clock();
  WordListInstructionsText = new visual.TextStim({
    win: psychoJS.window,
    name: 'WordListInstructionsText',
    text: 'You will now be shown a number of different words.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  WordListInstructionsContinueButton = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'WordListInstructionsContinueButton',
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
  WordListInstructionsContinueButton.clock = new util.Clock();
  
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
    // reset WelcomeContinueButton to account for continued clicks & clear times on/off
    WelcomeContinueButton.reset()
    psychoJS.experiment.addData('WelcomeScreen.started', globalClock.getTime());
    WelcomeScreenMaxDuration = null
    // keep track of which components have finished
    WelcomeScreenComponents = [];
    WelcomeScreenComponents.push(WelcomeText);
    WelcomeScreenComponents.push(WelcomeContinueButton);
    WelcomeScreenComponents.push(ScreenshotResources);
    
    WelcomeScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    
    // *WelcomeContinueButton* updates
    if (t >= 0 && WelcomeContinueButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      WelcomeContinueButton.tStart = t;  // (not accounting for frame time here)
      WelcomeContinueButton.frameNStart = frameN;  // exact frame index
      
      WelcomeContinueButton.setAutoDraw(true);
    }
    
    
    // if WelcomeContinueButton is active this frame...
    if (WelcomeContinueButton.status === PsychoJS.Status.STARTED) {
    }
    
    if (WelcomeContinueButton.status === PsychoJS.Status.STARTED) {
      // check whether WelcomeContinueButton has been pressed
      if (WelcomeContinueButton.isClicked) {
        if (!WelcomeContinueButton.wasClicked) {
          // store time of first click
          WelcomeContinueButton.timesOn.push(WelcomeContinueButton.clock.getTime());
          // store time clicked until
          WelcomeContinueButton.timesOff.push(WelcomeContinueButton.clock.getTime());
        } else {
          // update time clicked until;
          WelcomeContinueButton.timesOff[WelcomeContinueButton.timesOff.length - 1] = WelcomeContinueButton.clock.getTime();
        }
        if (!WelcomeContinueButton.wasClicked) {
          // end routine when WelcomeContinueButton is clicked
          continueRoutine = false;
          
        }
        // if WelcomeContinueButton is still clicked next frame, it is not a new click
        WelcomeContinueButton.wasClicked = true;
      } else {
        // if WelcomeContinueButton is clicked next frame, it is a new click
        WelcomeContinueButton.wasClicked = false;
      }
    } else {
      // keep clock at 0 if WelcomeContinueButton hasn't started / has finished
      WelcomeContinueButton.clock.reset();
      // if WelcomeContinueButton is clicked next frame, it is a new click
      WelcomeContinueButton.wasClicked = false;
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
    WelcomeScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    WelcomeScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('WelcomeScreen.stopped', globalClock.getTime());
    psychoJS.experiment.addData('WelcomeContinueButton.numClicks', WelcomeContinueButton.numClicks);
    psychoJS.experiment.addData('WelcomeContinueButton.timesOn', WelcomeContinueButton.timesOn);
    psychoJS.experiment.addData('WelcomeContinueButton.timesOff', WelcomeContinueButton.timesOff);
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
    
    ConditionSelectionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
          VideoInstructionsText.setText("Please take out your phone and go the Instagram account @[Account Name]\n Please watch every video in order from top to bottom with the volume on. You must finish each video before scrolling to the next and only watch each video once.\n Click continue when you are finished!");
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
          VideoInstructionsText.setText("Please take out your phone and go to the YouTube channel @[Channel Name]\n You should watch the video [Video Name] in fullscreen with the volume on until it is complete.\n Click continue when you are finished.");
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
    ConditionSelectionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    ConditionSelectionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    WithinSubjects.forEach(function() {
      snapshot = WithinSubjects.getSnapshot();
    
      WithinSubjectsLoopScheduler.add(importConditions(snapshot));
      WithinSubjectsLoopScheduler.add(VideoInstructionsRoutineBegin(snapshot));
      WithinSubjectsLoopScheduler.add(VideoInstructionsRoutineEachFrame());
      WithinSubjectsLoopScheduler.add(VideoInstructionsRoutineEnd(snapshot));
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
    });
    
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
    ScreenshotOrderTrial.forEach(function() {
      snapshot = ScreenshotOrderTrial.getSnapshot();
    
      ScreenshotOrderTrialLoopScheduler.add(importConditions(snapshot));
      ScreenshotOrderTrialLoopScheduler.add(ScreenshotOrderTaskRoutineBegin(snapshot));
      ScreenshotOrderTrialLoopScheduler.add(ScreenshotOrderTaskRoutineEachFrame());
      ScreenshotOrderTrialLoopScheduler.add(ScreenshotOrderTaskRoutineEnd(snapshot));
      ScreenshotOrderTrialLoopScheduler.add(ScreenshotOrderTrialLoopEndIteration(ScreenshotOrderTrialLoopScheduler, snapshot));
    });
    
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
    WordListTrial.forEach(function() {
      snapshot = WordListTrial.getSnapshot();
    
      WordListTrialLoopScheduler.add(importConditions(snapshot));
      WordListTrialLoopScheduler.add(WordListStudyRoutineBegin(snapshot));
      WordListTrialLoopScheduler.add(WordListStudyRoutineEachFrame());
      WordListTrialLoopScheduler.add(WordListStudyRoutineEnd(snapshot));
      WordListTrialLoopScheduler.add(WordListTrialLoopEndIteration(WordListTrialLoopScheduler, snapshot));
    });
    
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
    // reset VideoInstructionsContinueButton to account for continued clicks & clear times on/off
    VideoInstructionsContinueButton.reset()
    psychoJS.experiment.addData('VideoInstructions.started', globalClock.getTime());
    VideoInstructionsMaxDuration = null
    // keep track of which components have finished
    VideoInstructionsComponents = [];
    VideoInstructionsComponents.push(VideoInstructionsText);
    VideoInstructionsComponents.push(VideoInstructionsContinueButton);
    
    VideoInstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    
    // *VideoInstructionsContinueButton* updates
    if (t >= 0 && VideoInstructionsContinueButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      VideoInstructionsContinueButton.tStart = t;  // (not accounting for frame time here)
      VideoInstructionsContinueButton.frameNStart = frameN;  // exact frame index
      
      VideoInstructionsContinueButton.setAutoDraw(true);
    }
    
    
    // if VideoInstructionsContinueButton is active this frame...
    if (VideoInstructionsContinueButton.status === PsychoJS.Status.STARTED) {
    }
    
    if (VideoInstructionsContinueButton.status === PsychoJS.Status.STARTED) {
      // check whether VideoInstructionsContinueButton has been pressed
      if (VideoInstructionsContinueButton.isClicked) {
        if (!VideoInstructionsContinueButton.wasClicked) {
          // store time of first click
          VideoInstructionsContinueButton.timesOn.push(VideoInstructionsContinueButton.clock.getTime());
          // store time clicked until
          VideoInstructionsContinueButton.timesOff.push(VideoInstructionsContinueButton.clock.getTime());
        } else {
          // update time clicked until;
          VideoInstructionsContinueButton.timesOff[VideoInstructionsContinueButton.timesOff.length - 1] = VideoInstructionsContinueButton.clock.getTime();
        }
        if (!VideoInstructionsContinueButton.wasClicked) {
          // end routine when VideoInstructionsContinueButton is clicked
          continueRoutine = false;
          
        }
        // if VideoInstructionsContinueButton is still clicked next frame, it is not a new click
        VideoInstructionsContinueButton.wasClicked = true;
      } else {
        // if VideoInstructionsContinueButton is clicked next frame, it is a new click
        VideoInstructionsContinueButton.wasClicked = false;
      }
    } else {
      // keep clock at 0 if VideoInstructionsContinueButton hasn't started / has finished
      VideoInstructionsContinueButton.clock.reset();
      // if VideoInstructionsContinueButton is clicked next frame, it is a new click
      VideoInstructionsContinueButton.wasClicked = false;
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
    VideoInstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    VideoInstructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('VideoInstructions.stopped', globalClock.getTime());
    psychoJS.experiment.addData('VideoInstructionsContinueButton.numClicks', VideoInstructionsContinueButton.numClicks);
    psychoJS.experiment.addData('VideoInstructionsContinueButton.timesOn', VideoInstructionsContinueButton.timesOn);
    psychoJS.experiment.addData('VideoInstructionsContinueButton.timesOff', VideoInstructionsContinueButton.timesOff);
    // the Routine "VideoInstructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ScreenshotOrderTaskMaxDurationReached;
var gotValidClick;
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
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.corr = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('ScreenshotOrderTask.started', globalClock.getTime());
    ScreenshotOrderTaskMaxDuration = null
    // keep track of which components have finished
    ScreenshotOrderTaskComponents = [];
    ScreenshotOrderTaskComponents.push(ScreenshotLeft);
    ScreenshotOrderTaskComponents.push(ScreenshotRight);
    ScreenshotOrderTaskComponents.push(mouse);
    
    ScreenshotOrderTaskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var corr;
var corrAns;
var _mouseXYs;
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
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse.clickableObjects = eval([ScreenshotLeft, ScreenshotRight])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse.clickableObjects)) {
              mouse.clickableObjects = [mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse.clickableObjects) {
              if (obj.contains(mouse)) {
                  gotValidClick = true;
                  mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse.clicked_name.push(null);
          }
          // check whether click was in correct object
          if (gotValidClick) {
              corr = 0;
              corrAns = eval( );
              for (let obj of [corrAns]) {
                  if (obj.contains(mouse)) {
                      corr = 1;
                  };
              };
              mouse.corr.push(corr);
          };
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
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
    ScreenshotOrderTaskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    ScreenshotOrderTaskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ScreenshotOrderTask.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    psychoJS.experiment.addData('mouse.corr', mouse.corr);
    psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name);
    
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
    // reset WordListInstructionsContinueButton to account for continued clicks & clear times on/off
    WordListInstructionsContinueButton.reset()
    psychoJS.experiment.addData('WordListInstructions.started', globalClock.getTime());
    WordListInstructionsMaxDuration = null
    // keep track of which components have finished
    WordListInstructionsComponents = [];
    WordListInstructionsComponents.push(WordListInstructionsText);
    WordListInstructionsComponents.push(WordListInstructionsContinueButton);
    
    WordListInstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    
    
    // *WordListInstructionsContinueButton* updates
    if (t >= 0 && WordListInstructionsContinueButton.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      WordListInstructionsContinueButton.tStart = t;  // (not accounting for frame time here)
      WordListInstructionsContinueButton.frameNStart = frameN;  // exact frame index
      
      WordListInstructionsContinueButton.setAutoDraw(true);
    }
    
    
    // if WordListInstructionsContinueButton is active this frame...
    if (WordListInstructionsContinueButton.status === PsychoJS.Status.STARTED) {
    }
    
    if (WordListInstructionsContinueButton.status === PsychoJS.Status.STARTED) {
      // check whether WordListInstructionsContinueButton has been pressed
      if (WordListInstructionsContinueButton.isClicked) {
        if (!WordListInstructionsContinueButton.wasClicked) {
          // store time of first click
          WordListInstructionsContinueButton.timesOn.push(WordListInstructionsContinueButton.clock.getTime());
          // store time clicked until
          WordListInstructionsContinueButton.timesOff.push(WordListInstructionsContinueButton.clock.getTime());
        } else {
          // update time clicked until;
          WordListInstructionsContinueButton.timesOff[WordListInstructionsContinueButton.timesOff.length - 1] = WordListInstructionsContinueButton.clock.getTime();
        }
        if (!WordListInstructionsContinueButton.wasClicked) {
          // end routine when WordListInstructionsContinueButton is clicked
          continueRoutine = false;
          
        }
        // if WordListInstructionsContinueButton is still clicked next frame, it is not a new click
        WordListInstructionsContinueButton.wasClicked = true;
      } else {
        // if WordListInstructionsContinueButton is clicked next frame, it is a new click
        WordListInstructionsContinueButton.wasClicked = false;
      }
    } else {
      // keep clock at 0 if WordListInstructionsContinueButton hasn't started / has finished
      WordListInstructionsContinueButton.clock.reset();
      // if WordListInstructionsContinueButton is clicked next frame, it is a new click
      WordListInstructionsContinueButton.wasClicked = false;
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
    WordListInstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    WordListInstructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('WordListInstructions.stopped', globalClock.getTime());
    psychoJS.experiment.addData('WordListInstructionsContinueButton.numClicks', WordListInstructionsContinueButton.numClicks);
    psychoJS.experiment.addData('WordListInstructionsContinueButton.timesOn', WordListInstructionsContinueButton.timesOn);
    psychoJS.experiment.addData('WordListInstructionsContinueButton.timesOff', WordListInstructionsContinueButton.timesOff);
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
    
    WordListStudyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    WordListStudyComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    WordListStudyComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    WordListDistractionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    WordListDistractionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    WordListDistractionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    WordListTestComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    WordListTestComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    WordListTestComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
    
    BreakOrFinishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
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
    BreakOrFinishComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
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
    BreakOrFinishComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
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
