#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2026.1.1),
    on March 06, 2026, at 14:08
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
        originPath='C:\\Users\\Jackson\\Desktop\\Research Project Experiment\\experiment_lastrun.py',
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
            winType='pyglet', allowGUI=False, allowStencil=False,
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
        text='Welcome to the experiment!\n\n(Ethics)\n(Important Information)',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    ContinueButton = visual.ButtonStim(win, 
        text='Click to continue', font='Arvo',
        pos=(0, -0.3),
        letterHeight=0.05,
        size=(0.5, 0.2), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='ContinueButton',
        depth=-1
    )
    ContinueButton.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "ConditionSelection" ---
    ConditionSelectionText = visual.TextStim(win=win, name='ConditionSelectionText',
        text='Click the button below that corresponds to the condition you were assigned. If you are not sure, please ask the experimenter.',
        font='Arial',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    Condition1Button = visual.ButtonStim(win, 
        text='1', font='Arvo',
        pos=(-0.3, -0.3),
        letterHeight=0.05,
        size=(0.2, 0.2), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='Condition1Button',
        depth=-1
    )
    Condition1Button.buttonClock = core.Clock()
    Condition2Button = visual.ButtonStim(win, 
        text='2', font='Arvo',
        pos=(0.3, -0.3),
        letterHeight=0.05,
        size=(0.2, 0.2), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='Condition2Button',
        depth=-2
    )
    Condition2Button.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "StimulusLink" ---
    InstructionText = visual.TextStim(win=win, name='InstructionText',
        text=None,
        font='Arial',
        pos=(0, 0.2), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    StimulusLinkButton = visual.ButtonStim(win, 
        text='Click to continue', font='Arvo',
        pos=(0, -0.3),
        letterHeight=0.05,
        size=(0.5, 0.2), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='StimulusLinkButton',
        depth=-1
    )
    StimulusLinkButton.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "ScreenshotOrderTask" ---
    ScreenshotLeft = visual.ImageStim(
        win=win,
        name='ScreenshotLeft', 
        image='Screenshots/new1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    ScreenshotRight = visual.ImageStim(
        win=win,
        name='ScreenshotRight', 
        image='Screenshots/old1.jpg', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(0.5, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    ScreenshotLeftButton = visual.ButtonStim(win, 
        text='Click here', font='Arvo',
        pos=(0, 0),
        letterHeight=0.05,
        size=(0.5, 0.5), 
        ori=0.0
        ,borderWidth=0.0,
        fillColor='darkgrey', borderColor=None,
        color='white', colorSpace='rgb',
        opacity=None,
        bold=True, italic=False,
        padding=None,
        anchor='center',
        name='ScreenshotLeftButton',
        depth=-2
    )
    ScreenshotLeftButton.buttonClock = core.Clock()
    
    # --- Initialize components for Routine "WordListInstructions" ---
    
    # --- Initialize components for Routine "WordListStudy" ---
    
    # --- Initialize components for Routine "DistractionTask" ---
    
    # --- Initialize components for Routine "WordListTest" ---
    
    # --- Initialize components for Routine "BreakOrFinish" ---
    
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
        components=[WelcomeText, ContinueButton],
    )
    WelcomeScreen.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # reset ContinueButton to account for continued clicks & clear times on/off
    ContinueButton.reset()
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
        # *ContinueButton* updates
        
        # if ContinueButton is starting this frame...
        if ContinueButton.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            ContinueButton.frameNStart = frameN  # exact frame index
            ContinueButton.tStart = t  # local t and not account for scr refresh
            ContinueButton.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(ContinueButton, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'ContinueButton.started')
            # update status
            ContinueButton.status = STARTED
            win.callOnFlip(ContinueButton.buttonClock.reset)
            ContinueButton.setAutoDraw(True)
        
        # if ContinueButton is active this frame...
        if ContinueButton.status == STARTED:
            # update params
            pass
            # check whether ContinueButton has been pressed
            if ContinueButton.isClicked:
                if not ContinueButton.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    ContinueButton.timesOn.append(ContinueButton.buttonClock.getTime())
                    ContinueButton.timesOff.append(ContinueButton.buttonClock.getTime())
                elif len(ContinueButton.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    ContinueButton.timesOff[-1] = ContinueButton.buttonClock.getTime()
                if not ContinueButton.wasClicked:
                    # end routine when ContinueButton is clicked
                    continueRoutine = False
                if not ContinueButton.wasClicked:
                    # run callback code when ContinueButton is clicked
                    pass
        # take note of whether ContinueButton was clicked, so that next frame we know if clicks are new
        ContinueButton.wasClicked = ContinueButton.isClicked and ContinueButton.status == STARTED
        
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
    thisExp.addData('ContinueButton.numClicks', ContinueButton.numClicks)
    if ContinueButton.numClicks:
       thisExp.addData('ContinueButton.timesOn', ContinueButton.timesOn)
       thisExp.addData('ContinueButton.timesOff', ContinueButton.timesOff)
    else:
       thisExp.addData('ContinueButton.timesOn', "")
       thisExp.addData('ContinueButton.timesOff', "")
    thisExp.nextEntry()
    # the Routine "WelcomeScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "ConditionSelection" ---
    # create an object to store info about Routine ConditionSelection
    ConditionSelection = data.Routine(
        name='ConditionSelection',
        components=[ConditionSelectionText, Condition1Button, Condition2Button],
    )
    ConditionSelection.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # reset Condition1Button to account for continued clicks & clear times on/off
    Condition1Button.reset()
    # reset Condition2Button to account for continued clicks & clear times on/off
    Condition2Button.reset()
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
        # *Condition1Button* updates
        
        # if Condition1Button is starting this frame...
        if Condition1Button.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            Condition1Button.frameNStart = frameN  # exact frame index
            Condition1Button.tStart = t  # local t and not account for scr refresh
            Condition1Button.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Condition1Button, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Condition1Button.started')
            # update status
            Condition1Button.status = STARTED
            win.callOnFlip(Condition1Button.buttonClock.reset)
            Condition1Button.setAutoDraw(True)
        
        # if Condition1Button is active this frame...
        if Condition1Button.status == STARTED:
            # update params
            pass
            # check whether Condition1Button has been pressed
            if Condition1Button.isClicked:
                if not Condition1Button.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    Condition1Button.timesOn.append(Condition1Button.buttonClock.getTime())
                    Condition1Button.timesOff.append(Condition1Button.buttonClock.getTime())
                elif len(Condition1Button.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    Condition1Button.timesOff[-1] = Condition1Button.buttonClock.getTime()
                if not Condition1Button.wasClicked:
                    # end routine when Condition1Button is clicked
                    continueRoutine = False
                if not Condition1Button.wasClicked:
                    # run callback code when Condition1Button is clicked
                    InstructionText.setText("Please take out your phone and go the Instagram account @[Account Name]\n Please watch every video in order from top to bottom with the volume on. You must finish each video before scrolling to the next and only watch each video once.\n Click continue when you are finished!")
        # take note of whether Condition1Button was clicked, so that next frame we know if clicks are new
        Condition1Button.wasClicked = Condition1Button.isClicked and Condition1Button.status == STARTED
        # *Condition2Button* updates
        
        # if Condition2Button is starting this frame...
        if Condition2Button.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
            # keep track of start time/frame for later
            Condition2Button.frameNStart = frameN  # exact frame index
            Condition2Button.tStart = t  # local t and not account for scr refresh
            Condition2Button.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Condition2Button, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Condition2Button.started')
            # update status
            Condition2Button.status = STARTED
            win.callOnFlip(Condition2Button.buttonClock.reset)
            Condition2Button.setAutoDraw(True)
        
        # if Condition2Button is active this frame...
        if Condition2Button.status == STARTED:
            # update params
            pass
            # check whether Condition2Button has been pressed
            if Condition2Button.isClicked:
                if not Condition2Button.wasClicked:
                    # if this is a new click, store time of first click and clicked until
                    Condition2Button.timesOn.append(Condition2Button.buttonClock.getTime())
                    Condition2Button.timesOff.append(Condition2Button.buttonClock.getTime())
                elif len(Condition2Button.timesOff):
                    # if click is continuing from last frame, update time of clicked until
                    Condition2Button.timesOff[-1] = Condition2Button.buttonClock.getTime()
                if not Condition2Button.wasClicked:
                    # end routine when Condition2Button is clicked
                    continueRoutine = False
                if not Condition2Button.wasClicked:
                    # run callback code when Condition2Button is clicked
                    InstructionText.setText("Please take out your phone and go to the YouTube channel @[Channel Name]\n You should watch the video [Video Name] in fullscreen with the volume on until it is complete.\n Click continue when you are finished.")
        # take note of whether Condition2Button was clicked, so that next frame we know if clicks are new
        Condition2Button.wasClicked = Condition2Button.isClicked and Condition2Button.status == STARTED
        
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
    thisExp.addData('Condition1Button.numClicks', Condition1Button.numClicks)
    if Condition1Button.numClicks:
       thisExp.addData('Condition1Button.timesOn', Condition1Button.timesOn)
       thisExp.addData('Condition1Button.timesOff', Condition1Button.timesOff)
    else:
       thisExp.addData('Condition1Button.timesOn', "")
       thisExp.addData('Condition1Button.timesOff', "")
    thisExp.addData('Condition2Button.numClicks', Condition2Button.numClicks)
    if Condition2Button.numClicks:
       thisExp.addData('Condition2Button.timesOn', Condition2Button.timesOn)
       thisExp.addData('Condition2Button.timesOff', Condition2Button.timesOff)
    else:
       thisExp.addData('Condition2Button.timesOn', "")
       thisExp.addData('Condition2Button.timesOff', "")
    thisExp.nextEntry()
    # the Routine "ConditionSelection" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    WithinSubjects = data.TrialHandler2(
        name='WithinSubjects',
        nReps=1, 
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
        
        # --- Prepare to start Routine "StimulusLink" ---
        # create an object to store info about Routine StimulusLink
        StimulusLink = data.Routine(
            name='StimulusLink',
            components=[InstructionText, StimulusLinkButton],
        )
        StimulusLink.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # reset StimulusLinkButton to account for continued clicks & clear times on/off
        StimulusLinkButton.reset()
        # store start times for StimulusLink
        StimulusLink.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        StimulusLink.tStart = globalClock.getTime(format='float')
        StimulusLink.status = STARTED
        thisExp.addData('StimulusLink.started', StimulusLink.tStart)
        StimulusLink.maxDuration = None
        # keep track of which components have finished
        StimulusLinkComponents = StimulusLink.components
        for thisComponent in StimulusLink.components:
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
        
        # --- Run Routine "StimulusLink" ---
        thisExp.currentRoutine = StimulusLink
        StimulusLink.forceEnded = routineForceEnded = not continueRoutine
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
            
            # *InstructionText* updates
            
            # if InstructionText is starting this frame...
            if InstructionText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                InstructionText.frameNStart = frameN  # exact frame index
                InstructionText.tStart = t  # local t and not account for scr refresh
                InstructionText.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(InstructionText, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'InstructionText.started')
                # update status
                InstructionText.status = STARTED
                InstructionText.setAutoDraw(True)
            
            # if InstructionText is active this frame...
            if InstructionText.status == STARTED:
                # update params
                pass
            # *StimulusLinkButton* updates
            
            # if StimulusLinkButton is starting this frame...
            if StimulusLinkButton.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                StimulusLinkButton.frameNStart = frameN  # exact frame index
                StimulusLinkButton.tStart = t  # local t and not account for scr refresh
                StimulusLinkButton.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(StimulusLinkButton, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'StimulusLinkButton.started')
                # update status
                StimulusLinkButton.status = STARTED
                win.callOnFlip(StimulusLinkButton.buttonClock.reset)
                StimulusLinkButton.setAutoDraw(True)
            
            # if StimulusLinkButton is active this frame...
            if StimulusLinkButton.status == STARTED:
                # update params
                pass
                # check whether StimulusLinkButton has been pressed
                if StimulusLinkButton.isClicked:
                    if not StimulusLinkButton.wasClicked:
                        # if this is a new click, store time of first click and clicked until
                        StimulusLinkButton.timesOn.append(StimulusLinkButton.buttonClock.getTime())
                        StimulusLinkButton.timesOff.append(StimulusLinkButton.buttonClock.getTime())
                    elif len(StimulusLinkButton.timesOff):
                        # if click is continuing from last frame, update time of clicked until
                        StimulusLinkButton.timesOff[-1] = StimulusLinkButton.buttonClock.getTime()
                    if not StimulusLinkButton.wasClicked:
                        # end routine when StimulusLinkButton is clicked
                        continueRoutine = False
                    if not StimulusLinkButton.wasClicked:
                        # run callback code when StimulusLinkButton is clicked
                        pass
            # take note of whether StimulusLinkButton was clicked, so that next frame we know if clicks are new
            StimulusLinkButton.wasClicked = StimulusLinkButton.isClicked and StimulusLinkButton.status == STARTED
            
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
                    currentRoutine=StimulusLink,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                StimulusLink.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if StimulusLink.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in StimulusLink.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "StimulusLink" ---
        for thisComponent in StimulusLink.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for StimulusLink
        StimulusLink.tStop = globalClock.getTime(format='float')
        StimulusLink.tStopRefresh = tThisFlipGlobal
        thisExp.addData('StimulusLink.stopped', StimulusLink.tStop)
        WithinSubjects.addData('StimulusLinkButton.numClicks', StimulusLinkButton.numClicks)
        if StimulusLinkButton.numClicks:
           WithinSubjects.addData('StimulusLinkButton.timesOn', StimulusLinkButton.timesOn)
           WithinSubjects.addData('StimulusLinkButton.timesOff', StimulusLinkButton.timesOff)
        else:
           WithinSubjects.addData('StimulusLinkButton.timesOn', "")
           WithinSubjects.addData('StimulusLinkButton.timesOff', "")
        # the Routine "StimulusLink" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        ScreenshotOrderTrial = data.TrialHandler2(
            name='ScreenshotOrderTrial',
            nReps=2, 
            method='random', 
            extraInfo=expInfo, 
            originPath=-1, 
            trialList=[None], 
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
                components=[ScreenshotLeft, ScreenshotRight, ScreenshotLeftButton],
            )
            ScreenshotOrderTask.status = NOT_STARTED
            continueRoutine = True
            # update component parameters for each repeat
            # reset ScreenshotLeftButton to account for continued clicks & clear times on/off
            ScreenshotLeftButton.reset()
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
                # *ScreenshotLeftButton* updates
                
                # if ScreenshotLeftButton is starting this frame...
                if ScreenshotLeftButton.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    ScreenshotLeftButton.frameNStart = frameN  # exact frame index
                    ScreenshotLeftButton.tStart = t  # local t and not account for scr refresh
                    ScreenshotLeftButton.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(ScreenshotLeftButton, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'ScreenshotLeftButton.started')
                    # update status
                    ScreenshotLeftButton.status = STARTED
                    win.callOnFlip(ScreenshotLeftButton.buttonClock.reset)
                    ScreenshotLeftButton.setAutoDraw(True)
                
                # if ScreenshotLeftButton is active this frame...
                if ScreenshotLeftButton.status == STARTED:
                    # update params
                    pass
                    # check whether ScreenshotLeftButton has been pressed
                    if ScreenshotLeftButton.isClicked:
                        if not ScreenshotLeftButton.wasClicked:
                            # if this is a new click, store time of first click and clicked until
                            ScreenshotLeftButton.timesOn.append(globalClock.getTime())
                            ScreenshotLeftButton.timesOff.append(globalClock.getTime())
                        elif len(ScreenshotLeftButton.timesOff):
                            # if click is continuing from last frame, update time of clicked until
                            ScreenshotLeftButton.timesOff[-1] = globalClock.getTime()
                        if not ScreenshotLeftButton.wasClicked:
                            # end routine when ScreenshotLeftButton is clicked
                            continueRoutine = False
                        if not ScreenshotLeftButton.wasClicked:
                            # run callback code when ScreenshotLeftButton is clicked
                            pass
                # take note of whether ScreenshotLeftButton was clicked, so that next frame we know if clicks are new
                ScreenshotLeftButton.wasClicked = ScreenshotLeftButton.isClicked and ScreenshotLeftButton.status == STARTED
                
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
            ScreenshotOrderTrial.addData('ScreenshotLeftButton.numClicks', ScreenshotLeftButton.numClicks)
            if ScreenshotLeftButton.numClicks:
               ScreenshotOrderTrial.addData('ScreenshotLeftButton.timesOn', ScreenshotLeftButton.timesOn)
               ScreenshotOrderTrial.addData('ScreenshotLeftButton.timesOff', ScreenshotLeftButton.timesOff)
            else:
               ScreenshotOrderTrial.addData('ScreenshotLeftButton.timesOn', "")
               ScreenshotOrderTrial.addData('ScreenshotLeftButton.timesOff', "")
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
            
        # completed 2 repeats of 'ScreenshotOrderTrial'
        ScreenshotOrderTrial.status = FINISHED
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        
        # --- Prepare to start Routine "WordListInstructions" ---
        # create an object to store info about Routine WordListInstructions
        WordListInstructions = data.Routine(
            name='WordListInstructions',
            components=[],
        )
        WordListInstructions.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
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
        # the Routine "WordListInstructions" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        WordListTrial = data.TrialHandler2(
            name='WordListTrial',
            nReps=10, 
            method='sequential', 
            extraInfo=expInfo, 
            originPath=-1, 
            trialList=[None], 
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
                components=[],
            )
            WordListStudy.status = NOT_STARTED
            continueRoutine = True
            # update component parameters for each repeat
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
            while continueRoutine:
                # if trial has changed, end Routine now
                if hasattr(thisWordListTrial, 'status') and thisWordListTrial.status == STOPPING:
                    continueRoutine = False
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
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
            # the Routine "WordListStudy" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
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
            
        # completed 10 repeats of 'WordListTrial'
        WordListTrial.status = FINISHED
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        
        # --- Prepare to start Routine "DistractionTask" ---
        # create an object to store info about Routine DistractionTask
        DistractionTask = data.Routine(
            name='DistractionTask',
            components=[],
        )
        DistractionTask.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # store start times for DistractionTask
        DistractionTask.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        DistractionTask.tStart = globalClock.getTime(format='float')
        DistractionTask.status = STARTED
        thisExp.addData('DistractionTask.started', DistractionTask.tStart)
        DistractionTask.maxDuration = None
        # keep track of which components have finished
        DistractionTaskComponents = DistractionTask.components
        for thisComponent in DistractionTask.components:
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
        
        # --- Run Routine "DistractionTask" ---
        thisExp.currentRoutine = DistractionTask
        DistractionTask.forceEnded = routineForceEnded = not continueRoutine
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
                    currentRoutine=DistractionTask,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                DistractionTask.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if DistractionTask.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in DistractionTask.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "DistractionTask" ---
        for thisComponent in DistractionTask.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for DistractionTask
        DistractionTask.tStop = globalClock.getTime(format='float')
        DistractionTask.tStopRefresh = tThisFlipGlobal
        thisExp.addData('DistractionTask.stopped', DistractionTask.tStop)
        # the Routine "DistractionTask" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "WordListTest" ---
        # create an object to store info about Routine WordListTest
        WordListTest = data.Routine(
            name='WordListTest',
            components=[],
        )
        WordListTest.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
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
        # the Routine "WordListTest" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # --- Prepare to start Routine "BreakOrFinish" ---
        # create an object to store info about Routine BreakOrFinish
        BreakOrFinish = data.Routine(
            name='BreakOrFinish',
            components=[],
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
        
    # completed 1 repeats of 'WithinSubjects'
    WithinSubjects.status = FINISHED
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
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
