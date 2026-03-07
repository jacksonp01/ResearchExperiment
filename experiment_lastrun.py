#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2026.1.1),
    on March 07, 2026, at 16:39
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (
    NOT_STARTED, STARTED, PLAYING, PAUSED, STOPPED, STOPPING, FINISHED, PRESSED, 
    RELEASED, FOREVER, priority
)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

# Run 'Before Experiment' code from code
condition = 0
# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2026.1.1'
expName = 'experiment'  # from the Builder filename that created this script
expVersion = ''
# a list of functions to run when the experiment ends (starts off blank)
runAtExit = []
# information about this experiment
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'expVersion|hid': expVersion,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = True
_winSize = (1024, 768)
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
        # set window size
        _winSize = prefs.piloting['forcedWindowSize']
    # replace default participant ID
    if prefs.piloting['replaceParticipantID']:
        expInfo['participant'] = 'pilot'

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version=expVersion,
        extraInfo=expInfo, runtimeInfo=None,
        originPath='C:\\Users\\Jackson\\Documents\\GitHub\\ResearchExperiment\\experiment_lastrun.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    # store pilot mode in data file
    thisExp.addData('piloting', PILOTING, priority=priority.LOW)
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # set how much information should be printed to the console / app
    if PILOTING:
        logging.console.setLevel(
            prefs.piloting['pilotConsoleLoggingLevel']
        )
    else:
        logging.console.setLevel('warning')
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log')
    if PILOTING:
        logFile.setLevel(
            prefs.piloting['pilotLoggingLevel']
        )
    else:
        logFile.setLevel(
            logging.getLevel('info')
        )
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if PILOTING:
        logging.debug('Fullscreen settings ignored as running in pilot mode.')
    
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=_winSize, fullscr=_fullScr, screen=0,
            winType='pyglet', allowGUI=True, allowStencil=False,
            monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height',
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [0,0,0]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win._monitorFrameRate = win.getActualFrameRate(infoMsg='Attempting to measure frame rate of screen, please wait...')
        expInfo['frameRate'] = win._monitorFrameRate
    win.hideMessage()
    if PILOTING:
        # show a visual indicator if we're in piloting mode
        if prefs.piloting['showPilotingIndicator']:
            win.showPilotingIndicator()
        # always show the mouse in piloting mode
        if prefs.piloting['forceMouseVisible']:
            win.mouseVisible = True
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    ioSession = ioServer = eyetracker = None
    
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='ptb'
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], currentRoutine=None):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    currentRoutine : psychopy.data.Routine
        Current Routine we are in at time of pausing, if any. This object tells PsychoPy what Components to pause/play/dispatch.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # start a timer to figure out how long we're paused for
    pauseTimer = core.Clock()
    # pause any playback components
    if currentRoutine is not None:
        for comp in currentRoutine.getPlaybackComponents():
            comp.pause()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='PsychToolbox',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # dispatch messages on response components
        if currentRoutine is not None:
            for comp in currentRoutine.getDispatchComponents():
                comp.device.dispatchMessages()
        # sleep 1ms so other threads can execute
        clock.time.sleep(0.001)
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    if currentRoutine is not None:
        for comp in currentRoutine.getPlaybackComponents():
            comp.play()
    # reset any timers
    for timer in timers:
        timer.addTime(-pauseTimer.getTime())


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # update experiment info
    expInfo['date'] = data.getDateStr()
    expInfo['expName'] = expName
    expInfo['expVersion'] = expVersion
    expInfo['psychopyVersion'] = psychopyVersion
    # make sure window is set to foreground to prevent losing focus
    win.winHandle.activate()
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='PsychToolbox'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "WelcomeScreen" ---
    WelcomeText = visual.TextStim(win=win, name='WelcomeText',
        text='Welcome to the experiment!\n\n(Ethics)\n(Important Information)\n\nPress SPACE to continue',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    WelcomeScreenKeyboard = keyboard.Keyboard(deviceName='defaultKeyboard')
    
    # --- Initialize components for Routine "ConditionSelection" ---
    ConditionSelectionText = visual.TextStim(win=win, name='ConditionSelectionText',
        text='If you were assigned to condition 1 press a.\nIf you were assigned to condition 2 press d.\n\nIf you are not sure which condition you were assigned to, please ask the experimenter.',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    ConditionSelectionKeyboard = keyboard.Keyboard(deviceName='defaultKeyboard')
    
    # --- Initialize components for Routine "VideoInstructions" ---
    VideoInstructionsText = visual.TextStim(win=win, name='VideoInstructionsText',
        text=None,
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    VideoInstructionsKeyboard = keyboard.Keyboard(deviceName='defaultKeyboard')
    
    # --- Initialize components for Routine "ScreenshotInstructions" ---
    ScreenshotInstructionsText = visual.TextStim(win=win, name='ScreenshotInstructionsText',
        text='You will be shown two images. \nPlease indicate which one came first in the video.\nPress a for the left image and d for the right image.\nPress SPACE to continue',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    ScreenshotInstructionsKeyboard = keyboard.Keyboard(deviceName='defaultKeyboard')
    
    # --- Initialize components for Routine "ScreenshotOrderTask" ---
    ScreenshotLeft = visual.ImageStim(
        win=win,
        name='ScreenshotLeft', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(-0.3, 0), draggable=False, size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    ScreenshotRight = visual.ImageStim(
        win=win,
        name='ScreenshotRight', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0.3, 0), draggable=False, size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    ScreenshotKeyboard = keyboard.Keyboard(deviceName='defaultKeyboard')
    
    # --- Initialize components for Routine "WordListInstructions" ---
    WordListInstructionsText = visual.TextStim(win=win, name='WordListInstructionsText',
        text='You will now be shown a number of different words.\n\nPress SPACE to continue',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    WordListInstructionsKeyboard = keyboard.Keyboard(deviceName='defaultKeyboard')
    
    # --- Initialize components for Routine "WordListStudy" ---
    WordListStudyText = visual.TextStim(win=win, name='WordListStudyText',
        text='',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "WordListDistraction" ---
    WordListDistractionText = visual.TextStim(win=win, name='WordListDistractionText',
        text=None,
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    # Run 'Begin Experiment' code from RandomDistractionNumber
    WordListDistractionText.setText(f"Count backwards by 3 from {randint(100,1000)} out loud")
    
    # --- Initialize components for Routine "WordListTest" ---
    win.allowStencil = True
    WordListTestForm = visual.Form(win=win, name='WordListTestForm',
        items='Spreadsheets/wordlistform.csv',
        textHeight=0.03,
        font='Noto Sans',
        randomize=False,
        style='dark',
        fillColor=None, borderColor=None, itemColor='white', 
        responseColor='white', markerColor='red', colorSpace='rgb', 
        size=(1, 0.7),
        pos=(0, 0),
        itemPadding=0.05,
        depth=0
    )
    WordListTestKeyboard = keyboard.Keyboard(deviceName='defaultKeyboard')
    
    # --- Initialize components for Routine "BreakOrFinish" ---
    BreakText = visual.TextStim(win=win, name='BreakText',
        text='You will now take a 5 minute break! Yay!!!!',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    # Set experiment start values for variable component LoopVariable
    LoopVariable = 0
    LoopVariableContainer = []
    
    # --- Initialize components for Routine "EndScreen" ---
    EndScreenText = visual.TextStim(win=win, name='EndScreenText',
        text='Please wait while we save your results',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    if eyetracker is not None:
        eyetracker.enableEventReporting()
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # --- Prepare to start Routine "WelcomeScreen" ---
    # create an object to store info about Routine WelcomeScreen
    WelcomeScreen = data.Routine(
        name='WelcomeScreen',
        components=[WelcomeText, WelcomeScreenKeyboard],
    )
    WelcomeScreen.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for WelcomeScreenKeyboard
    WelcomeScreenKeyboard.keys = []
    WelcomeScreenKeyboard.rt = []
    _WelcomeScreenKeyboard_allKeys = []
    # store start times for WelcomeScreen
    WelcomeScreen.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    WelcomeScreen.tStart = globalClock.getTime(format='float')
    WelcomeScreen.status = STARTED
    thisExp.addData('WelcomeScreen.started', WelcomeScreen.tStart)
    WelcomeScreen.maxDuration = None
    # keep track of which components have finished
    WelcomeScreenComponents = WelcomeScreen.components
    for thisComponent in WelcomeScreen.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "WelcomeScreen" ---
    thisExp.currentRoutine = WelcomeScreen
    WelcomeScreen.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *WelcomeText* updates
        
        # if WelcomeText is starting this frame...
        if WelcomeText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            WelcomeText.frameNStart = frameN  # exact frame index
            WelcomeText.tStart = t  # local t and not account for scr refresh
            WelcomeText.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(WelcomeText, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'WelcomeText.started')
            # update status
            WelcomeText.status = STARTED
            WelcomeText.setAutoDraw(True)
        
        # if WelcomeText is active this frame...
        if WelcomeText.status == STARTED:
            # update params
            pass
        
        # *WelcomeScreenKeyboard* updates
        waitOnFlip = False
        
        # if WelcomeScreenKeyboard is starting this frame...
        if WelcomeScreenKeyboard.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            WelcomeScreenKeyboard.frameNStart = frameN  # exact frame index
            WelcomeScreenKeyboard.tStart = t  # local t and not account for scr refresh
            WelcomeScreenKeyboard.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(WelcomeScreenKeyboard, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'WelcomeScreenKeyboard.started')
            # update status
            WelcomeScreenKeyboard.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(WelcomeScreenKeyboard.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(WelcomeScreenKeyboard.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if WelcomeScreenKeyboard.status == STARTED and not waitOnFlip:
            theseKeys = WelcomeScreenKeyboard.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _WelcomeScreenKeyboard_allKeys.extend(theseKeys)
            if len(_WelcomeScreenKeyboard_allKeys):
                WelcomeScreenKeyboard.keys = _WelcomeScreenKeyboard_allKeys[-1].name  # just the last key pressed
                WelcomeScreenKeyboard.rt = _WelcomeScreenKeyboard_allKeys[-1].rt
                WelcomeScreenKeyboard.duration = _WelcomeScreenKeyboard_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=WelcomeScreen,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            WelcomeScreen.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if WelcomeScreen.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in WelcomeScreen.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "WelcomeScreen" ---
    for thisComponent in WelcomeScreen.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for WelcomeScreen
    WelcomeScreen.tStop = globalClock.getTime(format='float')
    WelcomeScreen.tStopRefresh = tThisFlipGlobal
    thisExp.addData('WelcomeScreen.stopped', WelcomeScreen.tStop)
    # check responses
    if WelcomeScreenKeyboard.keys in ['', [], None]:  # No response was made
        WelcomeScreenKeyboard.keys = None
    thisExp.addData('WelcomeScreenKeyboard.keys',WelcomeScreenKeyboard.keys)
    if WelcomeScreenKeyboard.keys != None:  # we had a response
        thisExp.addData('WelcomeScreenKeyboard.rt', WelcomeScreenKeyboard.rt)
        thisExp.addData('WelcomeScreenKeyboard.duration', WelcomeScreenKeyboard.duration)
    thisExp.nextEntry()
    # the Routine "WelcomeScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "ConditionSelection" ---
    # create an object to store info about Routine ConditionSelection
    ConditionSelection = data.Routine(
        name='ConditionSelection',
        components=[ConditionSelectionText, ConditionSelectionKeyboard],
    )
    ConditionSelection.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for ConditionSelectionKeyboard
    ConditionSelectionKeyboard.keys = []
    ConditionSelectionKeyboard.rt = []
    _ConditionSelectionKeyboard_allKeys = []
    # store start times for ConditionSelection
    ConditionSelection.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    ConditionSelection.tStart = globalClock.getTime(format='float')
    ConditionSelection.status = STARTED
    thisExp.addData('ConditionSelection.started', ConditionSelection.tStart)
    ConditionSelection.maxDuration = None
    # keep track of which components have finished
    ConditionSelectionComponents = ConditionSelection.components
    for thisComponent in ConditionSelection.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "ConditionSelection" ---
    thisExp.currentRoutine = ConditionSelection
    ConditionSelection.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *ConditionSelectionText* updates
        
        # if ConditionSelectionText is starting this frame...
        if ConditionSelectionText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            ConditionSelectionText.frameNStart = frameN  # exact frame index
            ConditionSelectionText.tStart = t  # local t and not account for scr refresh
            ConditionSelectionText.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(ConditionSelectionText, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'ConditionSelectionText.started')
            # update status
            ConditionSelectionText.status = STARTED
            ConditionSelectionText.setAutoDraw(True)
        
        # if ConditionSelectionText is active this frame...
        if ConditionSelectionText.status == STARTED:
            # update params
            pass
        
        # *ConditionSelectionKeyboard* updates
        waitOnFlip = False
        
        # if ConditionSelectionKeyboard is starting this frame...
        if ConditionSelectionKeyboard.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            ConditionSelectionKeyboard.frameNStart = frameN  # exact frame index
            ConditionSelectionKeyboard.tStart = t  # local t and not account for scr refresh
            ConditionSelectionKeyboard.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(ConditionSelectionKeyboard, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'ConditionSelectionKeyboard.started')
            # update status
            ConditionSelectionKeyboard.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(ConditionSelectionKeyboard.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(ConditionSelectionKeyboard.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if ConditionSelectionKeyboard.status == STARTED and not waitOnFlip:
            theseKeys = ConditionSelectionKeyboard.getKeys(keyList=['a','d'], ignoreKeys=["escape"], waitRelease=False)
            _ConditionSelectionKeyboard_allKeys.extend(theseKeys)
            if len(_ConditionSelectionKeyboard_allKeys):
                ConditionSelectionKeyboard.keys = _ConditionSelectionKeyboard_allKeys[-1].name  # just the last key pressed
                ConditionSelectionKeyboard.rt = _ConditionSelectionKeyboard_allKeys[-1].rt
                ConditionSelectionKeyboard.duration = _ConditionSelectionKeyboard_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=ConditionSelection,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            ConditionSelection.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if ConditionSelection.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in ConditionSelection.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "ConditionSelection" ---
    for thisComponent in ConditionSelection.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for ConditionSelection
    ConditionSelection.tStop = globalClock.getTime(format='float')
    ConditionSelection.tStopRefresh = tThisFlipGlobal
    thisExp.addData('ConditionSelection.stopped', ConditionSelection.tStop)
    # check responses
    if ConditionSelectionKeyboard.keys in ['', [], None]:  # No response was made
        ConditionSelectionKeyboard.keys = None
    thisExp.addData('ConditionSelectionKeyboard.keys',ConditionSelectionKeyboard.keys)
    if ConditionSelectionKeyboard.keys != None:  # we had a response
        thisExp.addData('ConditionSelectionKeyboard.rt', ConditionSelectionKeyboard.rt)
        thisExp.addData('ConditionSelectionKeyboard.duration', ConditionSelectionKeyboard.duration)
    # Run 'End Routine' code from code
    if ConditionSelectionKeyboard.keys == 'a':
        condition = 1
    elif ConditionSelectionKeyboard.keys == 'd':
        condition = 2
    thisExp.nextEntry()
    # the Routine "ConditionSelection" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    WithinSubjects = data.TrialHandler2(
        name='WithinSubjects',
        nReps=2, 
        method='sequential', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=[None], 
        seed=None, 
        isTrials=True, 
    )
    thisExp.addLoop(WithinSubjects)  # add the loop to the experiment
    thisWithinSubject = WithinSubjects.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisWithinSubject.rgb)
    if thisWithinSubject != None:
        for paramName in thisWithinSubject:
            globals()[paramName] = thisWithinSubject[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisWithinSubject in WithinSubjects:
        WithinSubjects.status = STARTED
        if hasattr(thisWithinSubject, 'status'):
            thisWithinSubject.status = STARTED
        currentLoop = WithinSubjects
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisWithinSubject.rgb)
        if thisWithinSubject != None:
            for paramName in thisWithinSubject:
                globals()[paramName] = thisWithinSubject[paramName]
        
        # --- Prepare to start Routine "VideoInstructions" ---
        # create an object to store info about Routine VideoInstructions
        VideoInstructions = data.Routine(
            name='VideoInstructions',
            components=[VideoInstructionsText, VideoInstructionsKeyboard],
        )
        VideoInstructions.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # create starting attributes for VideoInstructionsKeyboard
        VideoInstructionsKeyboard.keys = []
        VideoInstructionsKeyboard.rt = []
        _VideoInstructionsKeyboard_allKeys = []
        # Run 'Begin Routine' code from code_2
        if condition == 1:
            VideoInstructionsText.setText("Please take out your phone and go the Instagram account @[Account Name]\n Please watch every video in order from top to bottom with the volume on.\n You must finish each video before scrolling to the next and only watch each video once.\n\n Press spacebar when you are finished!")
        else:
            VideoInstructionsText.setText("Please take out your phone and go to the YouTube channel @[Channel Name]\n You should watch the video [Video Name] in fullscreen with the volume on until it is complete.\n\n Press space when you are finished.")
        # store start times for VideoInstructions
        VideoInstructions.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        VideoInstructions.tStart = globalClock.getTime(format='float')
        VideoInstructions.status = STARTED
        thisExp.addData('VideoInstructions.started', VideoInstructions.tStart)
        VideoInstructions.maxDuration = None
        # keep track of which components have finished
        VideoInstructionsComponents = VideoInstructions.components
        for thisComponent in VideoInstructions.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "VideoInstructions" ---
        thisExp.currentRoutine = VideoInstructions
        VideoInstructions.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisWithinSubject, 'status') and thisWithinSubject.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *VideoInstructionsText* updates
            
            # if VideoInstructionsText is starting this frame...
            if VideoInstructionsText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                VideoInstructionsText.frameNStart = frameN  # exact frame index
                VideoInstructionsText.tStart = t  # local t and not account for scr refresh
                VideoInstructionsText.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(VideoInstructionsText, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'VideoInstructionsText.started')
                # update status
                VideoInstructionsText.status = STARTED
                VideoInstructionsText.setAutoDraw(True)
            
            # if VideoInstructionsText is active this frame...
            if VideoInstructionsText.status == STARTED:
                # update params
                pass
            
            # *VideoInstructionsKeyboard* updates
            waitOnFlip = False
            
            # if VideoInstructionsKeyboard is starting this frame...
            if VideoInstructionsKeyboard.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                VideoInstructionsKeyboard.frameNStart = frameN  # exact frame index
                VideoInstructionsKeyboard.tStart = t  # local t and not account for scr refresh
                VideoInstructionsKeyboard.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(VideoInstructionsKeyboard, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'VideoInstructionsKeyboard.started')
                # update status
                VideoInstructionsKeyboard.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(VideoInstructionsKeyboard.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(VideoInstructionsKeyboard.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if VideoInstructionsKeyboard.status == STARTED and not waitOnFlip:
                theseKeys = VideoInstructionsKeyboard.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _VideoInstructionsKeyboard_allKeys.extend(theseKeys)
                if len(_VideoInstructionsKeyboard_allKeys):
                    VideoInstructionsKeyboard.keys = _VideoInstructionsKeyboard_allKeys[-1].name  # just the last key pressed
                    VideoInstructionsKeyboard.rt = _VideoInstructionsKeyboard_allKeys[-1].rt
                    VideoInstructionsKeyboard.duration = _VideoInstructionsKeyboard_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=VideoInstructions,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                VideoInstructions.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if VideoInstructions.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in VideoInstructions.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "VideoInstructions" ---
        for thisComponent in VideoInstructions.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for VideoInstructions
        VideoInstructions.tStop = globalClock.getTime(format='float')
        VideoInstructions.tStopRefresh = tThisFlipGlobal
        thisExp.addData('VideoInstructions.stopped', VideoInstructions.tStop)
        # check responses
        if VideoInstructionsKeyboard.keys in ['', [], None]:  # No response was made
            VideoInstructionsKeyboard.keys = None
        WithinSubjects.addData('VideoInstructionsKeyboard.keys',VideoInstructionsKeyboard.keys)
        if VideoInstructionsKeyboard.keys != None:  # we had a response
            WithinSubjects.addData('VideoInstructionsKeyboard.rt', VideoInstructionsKeyboard.rt)
            WithinSubjects.addData('VideoInstructionsKeyboard.duration', VideoInstructionsKeyboard.duration)
        # the Routine "VideoInstructions" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "ScreenshotInstructions" ---
        # create an object to store info about Routine ScreenshotInstructions
        ScreenshotInstructions = data.Routine(
            name='ScreenshotInstructions',
            components=[ScreenshotInstructionsText, ScreenshotInstructionsKeyboard],
        )
        ScreenshotInstructions.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # create starting attributes for ScreenshotInstructionsKeyboard
        ScreenshotInstructionsKeyboard.keys = []
        ScreenshotInstructionsKeyboard.rt = []
        _ScreenshotInstructionsKeyboard_allKeys = []
        # store start times for ScreenshotInstructions
        ScreenshotInstructions.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        ScreenshotInstructions.tStart = globalClock.getTime(format='float')
        ScreenshotInstructions.status = STARTED
        thisExp.addData('ScreenshotInstructions.started', ScreenshotInstructions.tStart)
        ScreenshotInstructions.maxDuration = None
        # keep track of which components have finished
        ScreenshotInstructionsComponents = ScreenshotInstructions.components
        for thisComponent in ScreenshotInstructions.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "ScreenshotInstructions" ---
        thisExp.currentRoutine = ScreenshotInstructions
        ScreenshotInstructions.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisWithinSubject, 'status') and thisWithinSubject.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *ScreenshotInstructionsText* updates
            
            # if ScreenshotInstructionsText is starting this frame...
            if ScreenshotInstructionsText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                ScreenshotInstructionsText.frameNStart = frameN  # exact frame index
                ScreenshotInstructionsText.tStart = t  # local t and not account for scr refresh
                ScreenshotInstructionsText.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(ScreenshotInstructionsText, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'ScreenshotInstructionsText.started')
                # update status
                ScreenshotInstructionsText.status = STARTED
                ScreenshotInstructionsText.setAutoDraw(True)
            
            # if ScreenshotInstructionsText is active this frame...
            if ScreenshotInstructionsText.status == STARTED:
                # update params
                pass
            
            # *ScreenshotInstructionsKeyboard* updates
            waitOnFlip = False
            
            # if ScreenshotInstructionsKeyboard is starting this frame...
            if ScreenshotInstructionsKeyboard.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                ScreenshotInstructionsKeyboard.frameNStart = frameN  # exact frame index
                ScreenshotInstructionsKeyboard.tStart = t  # local t and not account for scr refresh
                ScreenshotInstructionsKeyboard.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(ScreenshotInstructionsKeyboard, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'ScreenshotInstructionsKeyboard.started')
                # update status
                ScreenshotInstructionsKeyboard.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(ScreenshotInstructionsKeyboard.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(ScreenshotInstructionsKeyboard.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if ScreenshotInstructionsKeyboard.status == STARTED and not waitOnFlip:
                theseKeys = ScreenshotInstructionsKeyboard.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _ScreenshotInstructionsKeyboard_allKeys.extend(theseKeys)
                if len(_ScreenshotInstructionsKeyboard_allKeys):
                    ScreenshotInstructionsKeyboard.keys = _ScreenshotInstructionsKeyboard_allKeys[-1].name  # just the last key pressed
                    ScreenshotInstructionsKeyboard.rt = _ScreenshotInstructionsKeyboard_allKeys[-1].rt
                    ScreenshotInstructionsKeyboard.duration = _ScreenshotInstructionsKeyboard_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=ScreenshotInstructions,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                ScreenshotInstructions.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if ScreenshotInstructions.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in ScreenshotInstructions.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "ScreenshotInstructions" ---
        for thisComponent in ScreenshotInstructions.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for ScreenshotInstructions
        ScreenshotInstructions.tStop = globalClock.getTime(format='float')
        ScreenshotInstructions.tStopRefresh = tThisFlipGlobal
        thisExp.addData('ScreenshotInstructions.stopped', ScreenshotInstructions.tStop)
        # check responses
        if ScreenshotInstructionsKeyboard.keys in ['', [], None]:  # No response was made
            ScreenshotInstructionsKeyboard.keys = None
        WithinSubjects.addData('ScreenshotInstructionsKeyboard.keys',ScreenshotInstructionsKeyboard.keys)
        if ScreenshotInstructionsKeyboard.keys != None:  # we had a response
            WithinSubjects.addData('ScreenshotInstructionsKeyboard.rt', ScreenshotInstructionsKeyboard.rt)
            WithinSubjects.addData('ScreenshotInstructionsKeyboard.duration', ScreenshotInstructionsKeyboard.duration)
        # the Routine "ScreenshotInstructions" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        ScreenshotOrderTrial = data.TrialHandler2(
            name='ScreenshotOrderTrial',
            nReps=1, 
            method='random', 
            extraInfo=expInfo, 
            originPath=-1, 
            trialList=data.importConditions('Spreadsheets/screenshotspreadsheet.csv'), 
            seed=None, 
            isTrials=True, 
        )
        thisExp.addLoop(ScreenshotOrderTrial)  # add the loop to the experiment
        thisScreenshotOrderTrial = ScreenshotOrderTrial.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisScreenshotOrderTrial.rgb)
        if thisScreenshotOrderTrial != None:
            for paramName in thisScreenshotOrderTrial:
                globals()[paramName] = thisScreenshotOrderTrial[paramName]
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        
        for thisScreenshotOrderTrial in ScreenshotOrderTrial:
            ScreenshotOrderTrial.status = STARTED
            if hasattr(thisScreenshotOrderTrial, 'status'):
                thisScreenshotOrderTrial.status = STARTED
            currentLoop = ScreenshotOrderTrial
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
            # abbreviate parameter names if possible (e.g. rgb = thisScreenshotOrderTrial.rgb)
            if thisScreenshotOrderTrial != None:
                for paramName in thisScreenshotOrderTrial:
                    globals()[paramName] = thisScreenshotOrderTrial[paramName]
            
            # --- Prepare to start Routine "ScreenshotOrderTask" ---
            # create an object to store info about Routine ScreenshotOrderTask
            ScreenshotOrderTask = data.Routine(
                name='ScreenshotOrderTask',
                components=[ScreenshotLeft, ScreenshotRight, ScreenshotKeyboard],
            )
            ScreenshotOrderTask.status = NOT_STARTED
            continueRoutine = True
            # update component parameters for each repeat
            ScreenshotLeft.setImage(f"Screenshots/{Condition1Left}")
            ScreenshotRight.setImage(f"Screenshots/{Condition1Right}")
            # create starting attributes for ScreenshotKeyboard
            ScreenshotKeyboard.keys = []
            ScreenshotKeyboard.rt = []
            _ScreenshotKeyboard_allKeys = []
            # store start times for ScreenshotOrderTask
            ScreenshotOrderTask.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
            ScreenshotOrderTask.tStart = globalClock.getTime(format='float')
            ScreenshotOrderTask.status = STARTED
            thisExp.addData('ScreenshotOrderTask.started', ScreenshotOrderTask.tStart)
            ScreenshotOrderTask.maxDuration = None
            # keep track of which components have finished
            ScreenshotOrderTaskComponents = ScreenshotOrderTask.components
            for thisComponent in ScreenshotOrderTask.components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "ScreenshotOrderTask" ---
            thisExp.currentRoutine = ScreenshotOrderTask
            ScreenshotOrderTask.forceEnded = routineForceEnded = not continueRoutine
            while continueRoutine:
                # if trial has changed, end Routine now
                if hasattr(thisScreenshotOrderTrial, 'status') and thisScreenshotOrderTrial.status == STOPPING:
                    continueRoutine = False
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *ScreenshotLeft* updates
                
                # if ScreenshotLeft is starting this frame...
                if ScreenshotLeft.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    ScreenshotLeft.frameNStart = frameN  # exact frame index
                    ScreenshotLeft.tStart = t  # local t and not account for scr refresh
                    ScreenshotLeft.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(ScreenshotLeft, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'ScreenshotLeft.started')
                    # update status
                    ScreenshotLeft.status = STARTED
                    ScreenshotLeft.setAutoDraw(True)
                
                # if ScreenshotLeft is active this frame...
                if ScreenshotLeft.status == STARTED:
                    # update params
                    pass
                
                # *ScreenshotRight* updates
                
                # if ScreenshotRight is starting this frame...
                if ScreenshotRight.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    ScreenshotRight.frameNStart = frameN  # exact frame index
                    ScreenshotRight.tStart = t  # local t and not account for scr refresh
                    ScreenshotRight.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(ScreenshotRight, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'ScreenshotRight.started')
                    # update status
                    ScreenshotRight.status = STARTED
                    ScreenshotRight.setAutoDraw(True)
                
                # if ScreenshotRight is active this frame...
                if ScreenshotRight.status == STARTED:
                    # update params
                    pass
                
                # *ScreenshotKeyboard* updates
                waitOnFlip = False
                
                # if ScreenshotKeyboard is starting this frame...
                if ScreenshotKeyboard.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    ScreenshotKeyboard.frameNStart = frameN  # exact frame index
                    ScreenshotKeyboard.tStart = t  # local t and not account for scr refresh
                    ScreenshotKeyboard.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(ScreenshotKeyboard, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'ScreenshotKeyboard.started')
                    # update status
                    ScreenshotKeyboard.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(ScreenshotKeyboard.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(ScreenshotKeyboard.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if ScreenshotKeyboard.status == STARTED and not waitOnFlip:
                    theseKeys = ScreenshotKeyboard.getKeys(keyList=['a','d'], ignoreKeys=["escape"], waitRelease=False)
                    _ScreenshotKeyboard_allKeys.extend(theseKeys)
                    if len(_ScreenshotKeyboard_allKeys):
                        ScreenshotKeyboard.keys = _ScreenshotKeyboard_allKeys[-1].name  # just the last key pressed
                        ScreenshotKeyboard.rt = _ScreenshotKeyboard_allKeys[-1].rt
                        ScreenshotKeyboard.duration = _ScreenshotKeyboard_allKeys[-1].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                # pause experiment here if requested
                if thisExp.status == PAUSED:
                    pauseExperiment(
                        thisExp=thisExp, 
                        win=win, 
                        timers=[routineTimer, globalClock], 
                        currentRoutine=ScreenshotOrderTask,
                    )
                    # skip the frame we paused on
                    continue
                
                # has a Component requested the Routine to end?
                if not continueRoutine:
                    ScreenshotOrderTask.forceEnded = routineForceEnded = True
                # has the Routine been forcibly ended?
                if ScreenshotOrderTask.forceEnded or routineForceEnded:
                    break
                # has every Component finished?
                continueRoutine = False
                for thisComponent in ScreenshotOrderTask.components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "ScreenshotOrderTask" ---
            for thisComponent in ScreenshotOrderTask.components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # store stop times for ScreenshotOrderTask
            ScreenshotOrderTask.tStop = globalClock.getTime(format='float')
            ScreenshotOrderTask.tStopRefresh = tThisFlipGlobal
            thisExp.addData('ScreenshotOrderTask.stopped', ScreenshotOrderTask.tStop)
            # check responses
            if ScreenshotKeyboard.keys in ['', [], None]:  # No response was made
                ScreenshotKeyboard.keys = None
            ScreenshotOrderTrial.addData('ScreenshotKeyboard.keys',ScreenshotKeyboard.keys)
            if ScreenshotKeyboard.keys != None:  # we had a response
                ScreenshotOrderTrial.addData('ScreenshotKeyboard.rt', ScreenshotKeyboard.rt)
                ScreenshotOrderTrial.addData('ScreenshotKeyboard.duration', ScreenshotKeyboard.duration)
            # the Routine "ScreenshotOrderTask" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
            # mark thisScreenshotOrderTrial as finished
            if hasattr(thisScreenshotOrderTrial, 'status'):
                thisScreenshotOrderTrial.status = FINISHED
            # if awaiting a pause, pause now
            if ScreenshotOrderTrial.status == PAUSED:
                thisExp.status = PAUSED
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[globalClock], 
                )
                # once done pausing, restore running status
                ScreenshotOrderTrial.status = STARTED
            thisExp.nextEntry()
            
        # completed 1 repeats of 'ScreenshotOrderTrial'
        ScreenshotOrderTrial.status = FINISHED
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        
        # --- Prepare to start Routine "WordListInstructions" ---
        # create an object to store info about Routine WordListInstructions
        WordListInstructions = data.Routine(
            name='WordListInstructions',
            components=[WordListInstructionsText, WordListInstructionsKeyboard],
        )
        WordListInstructions.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # create starting attributes for WordListInstructionsKeyboard
        WordListInstructionsKeyboard.keys = []
        WordListInstructionsKeyboard.rt = []
        _WordListInstructionsKeyboard_allKeys = []
        # store start times for WordListInstructions
        WordListInstructions.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        WordListInstructions.tStart = globalClock.getTime(format='float')
        WordListInstructions.status = STARTED
        thisExp.addData('WordListInstructions.started', WordListInstructions.tStart)
        WordListInstructions.maxDuration = None
        # keep track of which components have finished
        WordListInstructionsComponents = WordListInstructions.components
        for thisComponent in WordListInstructions.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "WordListInstructions" ---
        thisExp.currentRoutine = WordListInstructions
        WordListInstructions.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisWithinSubject, 'status') and thisWithinSubject.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *WordListInstructionsText* updates
            
            # if WordListInstructionsText is starting this frame...
            if WordListInstructionsText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                WordListInstructionsText.frameNStart = frameN  # exact frame index
                WordListInstructionsText.tStart = t  # local t and not account for scr refresh
                WordListInstructionsText.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(WordListInstructionsText, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'WordListInstructionsText.started')
                # update status
                WordListInstructionsText.status = STARTED
                WordListInstructionsText.setAutoDraw(True)
            
            # if WordListInstructionsText is active this frame...
            if WordListInstructionsText.status == STARTED:
                # update params
                pass
            
            # *WordListInstructionsKeyboard* updates
            waitOnFlip = False
            
            # if WordListInstructionsKeyboard is starting this frame...
            if WordListInstructionsKeyboard.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                WordListInstructionsKeyboard.frameNStart = frameN  # exact frame index
                WordListInstructionsKeyboard.tStart = t  # local t and not account for scr refresh
                WordListInstructionsKeyboard.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(WordListInstructionsKeyboard, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'WordListInstructionsKeyboard.started')
                # update status
                WordListInstructionsKeyboard.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(WordListInstructionsKeyboard.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(WordListInstructionsKeyboard.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if WordListInstructionsKeyboard.status == STARTED and not waitOnFlip:
                theseKeys = WordListInstructionsKeyboard.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _WordListInstructionsKeyboard_allKeys.extend(theseKeys)
                if len(_WordListInstructionsKeyboard_allKeys):
                    WordListInstructionsKeyboard.keys = _WordListInstructionsKeyboard_allKeys[-1].name  # just the last key pressed
                    WordListInstructionsKeyboard.rt = _WordListInstructionsKeyboard_allKeys[-1].rt
                    WordListInstructionsKeyboard.duration = _WordListInstructionsKeyboard_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=WordListInstructions,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                WordListInstructions.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if WordListInstructions.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in WordListInstructions.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "WordListInstructions" ---
        for thisComponent in WordListInstructions.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for WordListInstructions
        WordListInstructions.tStop = globalClock.getTime(format='float')
        WordListInstructions.tStopRefresh = tThisFlipGlobal
        thisExp.addData('WordListInstructions.stopped', WordListInstructions.tStop)
        # check responses
        if WordListInstructionsKeyboard.keys in ['', [], None]:  # No response was made
            WordListInstructionsKeyboard.keys = None
        WithinSubjects.addData('WordListInstructionsKeyboard.keys',WordListInstructionsKeyboard.keys)
        if WordListInstructionsKeyboard.keys != None:  # we had a response
            WithinSubjects.addData('WordListInstructionsKeyboard.rt', WordListInstructionsKeyboard.rt)
            WithinSubjects.addData('WordListInstructionsKeyboard.duration', WordListInstructionsKeyboard.duration)
        # the Routine "WordListInstructions" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        WordListTrial = data.TrialHandler2(
            name='WordListTrial',
            nReps=1, 
            method='random', 
            extraInfo=expInfo, 
            originPath=-1, 
            trialList=data.importConditions('Spreadsheets/wordlistspreadsheets.csv'), 
            seed=None, 
            isTrials=True, 
        )
        thisExp.addLoop(WordListTrial)  # add the loop to the experiment
        thisWordListTrial = WordListTrial.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisWordListTrial.rgb)
        if thisWordListTrial != None:
            for paramName in thisWordListTrial:
                globals()[paramName] = thisWordListTrial[paramName]
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        
        for thisWordListTrial in WordListTrial:
            WordListTrial.status = STARTED
            if hasattr(thisWordListTrial, 'status'):
                thisWordListTrial.status = STARTED
            currentLoop = WordListTrial
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
            # abbreviate parameter names if possible (e.g. rgb = thisWordListTrial.rgb)
            if thisWordListTrial != None:
                for paramName in thisWordListTrial:
                    globals()[paramName] = thisWordListTrial[paramName]
            
            # --- Prepare to start Routine "WordListStudy" ---
            # create an object to store info about Routine WordListStudy
            WordListStudy = data.Routine(
                name='WordListStudy',
                components=[WordListStudyText],
            )
            WordListStudy.status = NOT_STARTED
            continueRoutine = True
            # update component parameters for each repeat
            WordListStudyText.setText(FirstList)
            # store start times for WordListStudy
            WordListStudy.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
            WordListStudy.tStart = globalClock.getTime(format='float')
            WordListStudy.status = STARTED
            thisExp.addData('WordListStudy.started', WordListStudy.tStart)
            WordListStudy.maxDuration = None
            # keep track of which components have finished
            WordListStudyComponents = WordListStudy.components
            for thisComponent in WordListStudy.components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "WordListStudy" ---
            thisExp.currentRoutine = WordListStudy
            WordListStudy.forceEnded = routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 1.0:
                # if trial has changed, end Routine now
                if hasattr(thisWordListTrial, 'status') and thisWordListTrial.status == STOPPING:
                    continueRoutine = False
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *WordListStudyText* updates
                
                # if WordListStudyText is starting this frame...
                if WordListStudyText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    WordListStudyText.frameNStart = frameN  # exact frame index
                    WordListStudyText.tStart = t  # local t and not account for scr refresh
                    WordListStudyText.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(WordListStudyText, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'WordListStudyText.started')
                    # update status
                    WordListStudyText.status = STARTED
                    WordListStudyText.setAutoDraw(True)
                
                # if WordListStudyText is active this frame...
                if WordListStudyText.status == STARTED:
                    # update params
                    pass
                
                # if WordListStudyText is stopping this frame...
                if WordListStudyText.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > WordListStudyText.tStartRefresh + 1.0-frameTolerance:
                        # keep track of stop time/frame for later
                        WordListStudyText.tStop = t  # not accounting for scr refresh
                        WordListStudyText.tStopRefresh = tThisFlipGlobal  # on global time
                        WordListStudyText.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'WordListStudyText.stopped')
                        # update status
                        WordListStudyText.status = FINISHED
                        WordListStudyText.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                # pause experiment here if requested
                if thisExp.status == PAUSED:
                    pauseExperiment(
                        thisExp=thisExp, 
                        win=win, 
                        timers=[routineTimer, globalClock], 
                        currentRoutine=WordListStudy,
                    )
                    # skip the frame we paused on
                    continue
                
                # has a Component requested the Routine to end?
                if not continueRoutine:
                    WordListStudy.forceEnded = routineForceEnded = True
                # has the Routine been forcibly ended?
                if WordListStudy.forceEnded or routineForceEnded:
                    break
                # has every Component finished?
                continueRoutine = False
                for thisComponent in WordListStudy.components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "WordListStudy" ---
            for thisComponent in WordListStudy.components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # store stop times for WordListStudy
            WordListStudy.tStop = globalClock.getTime(format='float')
            WordListStudy.tStopRefresh = tThisFlipGlobal
            thisExp.addData('WordListStudy.stopped', WordListStudy.tStop)
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if WordListStudy.maxDurationReached:
                routineTimer.addTime(-WordListStudy.maxDuration)
            elif WordListStudy.forceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-1.000000)
            # mark thisWordListTrial as finished
            if hasattr(thisWordListTrial, 'status'):
                thisWordListTrial.status = FINISHED
            # if awaiting a pause, pause now
            if WordListTrial.status == PAUSED:
                thisExp.status = PAUSED
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[globalClock], 
                )
                # once done pausing, restore running status
                WordListTrial.status = STARTED
            thisExp.nextEntry()
            
        # completed 1 repeats of 'WordListTrial'
        WordListTrial.status = FINISHED
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        
        # --- Prepare to start Routine "WordListDistraction" ---
        # create an object to store info about Routine WordListDistraction
        WordListDistraction = data.Routine(
            name='WordListDistraction',
            components=[WordListDistractionText],
        )
        WordListDistraction.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # store start times for WordListDistraction
        WordListDistraction.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        WordListDistraction.tStart = globalClock.getTime(format='float')
        WordListDistraction.status = STARTED
        thisExp.addData('WordListDistraction.started', WordListDistraction.tStart)
        WordListDistraction.maxDuration = None
        # keep track of which components have finished
        WordListDistractionComponents = WordListDistraction.components
        for thisComponent in WordListDistraction.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "WordListDistraction" ---
        thisExp.currentRoutine = WordListDistraction
        WordListDistraction.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 1.0:
            # if trial has changed, end Routine now
            if hasattr(thisWithinSubject, 'status') and thisWithinSubject.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *WordListDistractionText* updates
            
            # if WordListDistractionText is starting this frame...
            if WordListDistractionText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                WordListDistractionText.frameNStart = frameN  # exact frame index
                WordListDistractionText.tStart = t  # local t and not account for scr refresh
                WordListDistractionText.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(WordListDistractionText, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'WordListDistractionText.started')
                # update status
                WordListDistractionText.status = STARTED
                WordListDistractionText.setAutoDraw(True)
            
            # if WordListDistractionText is active this frame...
            if WordListDistractionText.status == STARTED:
                # update params
                pass
            
            # if WordListDistractionText is stopping this frame...
            if WordListDistractionText.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > WordListDistractionText.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    WordListDistractionText.tStop = t  # not accounting for scr refresh
                    WordListDistractionText.tStopRefresh = tThisFlipGlobal  # on global time
                    WordListDistractionText.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'WordListDistractionText.stopped')
                    # update status
                    WordListDistractionText.status = FINISHED
                    WordListDistractionText.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=WordListDistraction,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                WordListDistraction.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if WordListDistraction.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in WordListDistraction.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "WordListDistraction" ---
        for thisComponent in WordListDistraction.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for WordListDistraction
        WordListDistraction.tStop = globalClock.getTime(format='float')
        WordListDistraction.tStopRefresh = tThisFlipGlobal
        thisExp.addData('WordListDistraction.stopped', WordListDistraction.tStop)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if WordListDistraction.maxDurationReached:
            routineTimer.addTime(-WordListDistraction.maxDuration)
        elif WordListDistraction.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-1.000000)
        
        # --- Prepare to start Routine "WordListTest" ---
        # create an object to store info about Routine WordListTest
        WordListTest = data.Routine(
            name='WordListTest',
            components=[WordListTestForm, WordListTestKeyboard],
        )
        WordListTest.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # create starting attributes for WordListTestKeyboard
        WordListTestKeyboard.keys = []
        WordListTestKeyboard.rt = []
        _WordListTestKeyboard_allKeys = []
        # store start times for WordListTest
        WordListTest.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        WordListTest.tStart = globalClock.getTime(format='float')
        WordListTest.status = STARTED
        thisExp.addData('WordListTest.started', WordListTest.tStart)
        WordListTest.maxDuration = None
        # keep track of which components have finished
        WordListTestComponents = WordListTest.components
        for thisComponent in WordListTest.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "WordListTest" ---
        thisExp.currentRoutine = WordListTest
        WordListTest.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisWithinSubject, 'status') and thisWithinSubject.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *WordListTestForm* updates
            
            # if WordListTestForm is starting this frame...
            if WordListTestForm.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                WordListTestForm.frameNStart = frameN  # exact frame index
                WordListTestForm.tStart = t  # local t and not account for scr refresh
                WordListTestForm.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(WordListTestForm, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'WordListTestForm.started')
                # update status
                WordListTestForm.status = STARTED
                WordListTestForm.setAutoDraw(True)
            
            # if WordListTestForm is active this frame...
            if WordListTestForm.status == STARTED:
                # update params
                pass
            
            # *WordListTestKeyboard* updates
            waitOnFlip = False
            
            # if WordListTestKeyboard is starting this frame...
            if WordListTestKeyboard.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                WordListTestKeyboard.frameNStart = frameN  # exact frame index
                WordListTestKeyboard.tStart = t  # local t and not account for scr refresh
                WordListTestKeyboard.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(WordListTestKeyboard, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'WordListTestKeyboard.started')
                # update status
                WordListTestKeyboard.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(WordListTestKeyboard.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(WordListTestKeyboard.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if WordListTestKeyboard.status == STARTED and not waitOnFlip:
                theseKeys = WordListTestKeyboard.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _WordListTestKeyboard_allKeys.extend(theseKeys)
                if len(_WordListTestKeyboard_allKeys):
                    WordListTestKeyboard.keys = _WordListTestKeyboard_allKeys[-1].name  # just the last key pressed
                    WordListTestKeyboard.rt = _WordListTestKeyboard_allKeys[-1].rt
                    WordListTestKeyboard.duration = _WordListTestKeyboard_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=WordListTest,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                WordListTest.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if WordListTest.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in WordListTest.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "WordListTest" ---
        for thisComponent in WordListTest.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for WordListTest
        WordListTest.tStop = globalClock.getTime(format='float')
        WordListTest.tStopRefresh = tThisFlipGlobal
        thisExp.addData('WordListTest.stopped', WordListTest.tStop)
        WordListTestForm.addDataToExp(thisExp, 'columns')
        WordListTestForm.autodraw = False
        # check responses
        if WordListTestKeyboard.keys in ['', [], None]:  # No response was made
            WordListTestKeyboard.keys = None
        WithinSubjects.addData('WordListTestKeyboard.keys',WordListTestKeyboard.keys)
        if WordListTestKeyboard.keys != None:  # we had a response
            WithinSubjects.addData('WordListTestKeyboard.rt', WordListTestKeyboard.rt)
            WithinSubjects.addData('WordListTestKeyboard.duration', WordListTestKeyboard.duration)
        # the Routine "WordListTest" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "BreakOrFinish" ---
        # create an object to store info about Routine BreakOrFinish
        BreakOrFinish = data.Routine(
            name='BreakOrFinish',
            components=[BreakText],
        )
        BreakOrFinish.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # store start times for BreakOrFinish
        BreakOrFinish.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        BreakOrFinish.tStart = globalClock.getTime(format='float')
        BreakOrFinish.status = STARTED
        thisExp.addData('BreakOrFinish.started', BreakOrFinish.tStart)
        BreakOrFinish.maxDuration = None
        # skip Routine BreakOrFinish if its 'Skip if' condition is True
        BreakOrFinish.skipped = continueRoutine and not (LoopVariable == 1)
        continueRoutine = BreakOrFinish.skipped
        # keep track of which components have finished
        BreakOrFinishComponents = BreakOrFinish.components
        for thisComponent in BreakOrFinish.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "BreakOrFinish" ---
        thisExp.currentRoutine = BreakOrFinish
        BreakOrFinish.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisWithinSubject, 'status') and thisWithinSubject.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *BreakText* updates
            
            # if BreakText is starting this frame...
            if BreakText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                BreakText.frameNStart = frameN  # exact frame index
                BreakText.tStart = t  # local t and not account for scr refresh
                BreakText.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(BreakText, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'BreakText.started')
                # update status
                BreakText.status = STARTED
                BreakText.setAutoDraw(True)
            
            # if BreakText is active this frame...
            if BreakText.status == STARTED:
                # update params
                pass
            
            # if BreakText is stopping this frame...
            if BreakText.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > BreakText.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    BreakText.tStop = t  # not accounting for scr refresh
                    BreakText.tStopRefresh = tThisFlipGlobal  # on global time
                    BreakText.frameNStop = frameN  # exact frame index
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'BreakText.stopped')
                    # update status
                    BreakText.status = FINISHED
                    BreakText.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=BreakOrFinish,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                BreakOrFinish.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if BreakOrFinish.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in BreakOrFinish.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "BreakOrFinish" ---
        for thisComponent in BreakOrFinish.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for BreakOrFinish
        BreakOrFinish.tStop = globalClock.getTime(format='float')
        BreakOrFinish.tStopRefresh = tThisFlipGlobal
        thisExp.addData('BreakOrFinish.stopped', BreakOrFinish.tStop)
        # Run 'End Routine' code from BreakCode
        if condition == 1:
            condition = 2
        else: 
            condition = 1
        
        LoopVariable = 1
        
        # the Routine "BreakOrFinish" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        # mark thisWithinSubject as finished
        if hasattr(thisWithinSubject, 'status'):
            thisWithinSubject.status = FINISHED
        # if awaiting a pause, pause now
        if WithinSubjects.status == PAUSED:
            thisExp.status = PAUSED
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[globalClock], 
            )
            # once done pausing, restore running status
            WithinSubjects.status = STARTED
        thisExp.nextEntry()
        
    # completed 2 repeats of 'WithinSubjects'
    WithinSubjects.status = FINISHED
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # --- Prepare to start Routine "EndScreen" ---
    # create an object to store info about Routine EndScreen
    EndScreen = data.Routine(
        name='EndScreen',
        components=[EndScreenText],
    )
    EndScreen.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # store start times for EndScreen
    EndScreen.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    EndScreen.tStart = globalClock.getTime(format='float')
    EndScreen.status = STARTED
    thisExp.addData('EndScreen.started', EndScreen.tStart)
    EndScreen.maxDuration = None
    # keep track of which components have finished
    EndScreenComponents = EndScreen.components
    for thisComponent in EndScreen.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "EndScreen" ---
    thisExp.currentRoutine = EndScreen
    EndScreen.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *EndScreenText* updates
        
        # if EndScreenText is starting this frame...
        if EndScreenText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            EndScreenText.frameNStart = frameN  # exact frame index
            EndScreenText.tStart = t  # local t and not account for scr refresh
            EndScreenText.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(EndScreenText, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'EndScreenText.started')
            # update status
            EndScreenText.status = STARTED
            EndScreenText.setAutoDraw(True)
        
        # if EndScreenText is active this frame...
        if EndScreenText.status == STARTED:
            # update params
            pass
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=EndScreen,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            EndScreen.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if EndScreen.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in EndScreen.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "EndScreen" ---
    for thisComponent in EndScreen.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for EndScreen
    EndScreen.tStop = globalClock.getTime(format='float')
    EndScreen.tStopRefresh = tThisFlipGlobal
    thisExp.addData('EndScreen.stopped', EndScreen.tStop)
    thisExp.nextEntry()
    # the Routine "EndScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    # stop any playback components
    if thisExp.currentRoutine is not None:
        for comp in thisExp.currentRoutine.getPlaybackComponents():
            comp.stop()
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # return console logger level to WARNING
    logging.console.setLevel(logging.WARNING)
    # mark experiment handler as finished
    thisExp.status = FINISHED
    # run any 'at exit' functions
    for fcn in runAtExit:
        fcn()
    logging.flush()


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)
