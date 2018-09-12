# cs4249 Assignment 1

## Experiment Process

- Pre-experiment Questionnaire (`pre-quest.html`): Participants will be given a link to the pre-questionnaire.
- Instructions (`index.html`): After submitting, a link to the instructions will be displayed on the form.
- Practice Trials: Participants will be shown a link to the practice trials at the instructions page.
- Main experiment: When participants are ready, they will select their participant ID on the instructions page to proceed to main experiment.
- Post-experiment Questionnare (`post-quest.html`): Clicking 'Done' after the last menu selection will take the participants to the post-experiment questionnaire.

## Added Variables

### 3rd IV: Input Style

- 2 levels: Mouse, Trackpad
- 3rd IV is colour coded on the experiment interface to alert participants when to change input style
- Style of input is recorded to csv file

### 3rd DV: Efficiency

- Efficiency (%) : 1 / Number of menu popups before selection
- Number of popups is recorded to csv file

---

This repository contains a basic interface and instrumentation to perform an empirical evaluation of Marking Menus and Radial Menus. You are expected to modify the code to perform the following tasks

1. Implement a new Independent Variable
2. Implement a new Dependent Variable
3. Modify tracking to record participant id, consent, pre-survey and post-survey questionnaires.

You may fork this repository to your own Github account and clone your forked version for development. This will also help you use Github pages for hosting if you plan to conduct experiments online.

## Project Structure

The interface is a static web project. However because of cross origin restrictions you will need a web server to run the experiment. Either turn on Github Pages(https://pages.github.com/) for your forked repository or setup a local server of your choice.

    ├── css                     # Style Sheets
         ├── external
         ├── experiment.css
    ├── js                      # Javascript
         ├── external
         ├── experiment.js
         ├── experiment-tracker.js
    ├── data
         ├── experiment_0.csv   # Arrangement of practice trials
         ├── experiment_1.csv   # Arrangement for participant 1
         ├── experiment_2.csv   # Arrangement for participant 2
         ├── experiment_3.csv   # Arrangement for participant 3
         ├── experiment_4.csv   # Arrangement for participant 4
         ├── experiment_5.csv   # Arrangement for participant 5
         ├── experiment_6.csv   # Arrangement for participant 6
         ├── menu_depth_1.csv   # Menu with depth 1
         ├── menu_depth_2.csv   # Menu with depth 2
         ├── manu_depth_3.csv   # Menu with depth 3
    ├── experiment.html
    ├── index.html // the instructions
    ├── post-quest.html
    ├── pre-quest.html

Ideally, you shouldn't need to edit any of the files under "/external" unless your experimental design requires modifications to the menu implementation. Please avoid tweaking parameters of the menu such as color, size etc. To maintain consistency across the class we will use the default parameters as provided in this repository.

### Marking Menu

- Popup: Left Mouse Down
- Select: Stroke to leaf node
- Reset: Release Mouse Down
- Note:\* Expert user's can make a fast stroke instead of waiting for the manu to pop up.

### Radial Menu:

- Popup: Right Click
- Select: Left Click
- Reset: Right Click

### Recommended Browsers

This repository has been tested on the browsers listed below. It is suggested you use Chrome.

1. Chrome 68.0.3440.106
2. Firfox 61.0.2
3. Safari V10

## Credits

This repository contains modified implementations of menus from the original contributors listed below.

1. Marking Menu : Forked from https://github.com/QuentinRoy/Marking-Menu
2. Radial Menu : Forked from https://github.com/lgrkvst/d3-sunburst-menu
