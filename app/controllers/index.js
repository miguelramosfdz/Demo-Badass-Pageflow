Alloy.Globals.pageFlow = $.pageflow;

// Create a navigation without left controller
$.pageflow.addChild({
    controller: 'homepage',
    navBar: {
        title: 'Homepage',
        androidTitleOptions: {
            marginLeft: 14
        }
    }
});

// Create a navigation with a menu button, with an animation on android
// $.pageflow.addChild({
//     controller: 'homepage',
//     navBar: {
//         title: 'Homepage',
//         left: 'menuButton',
//         leftOptions: { menuButton: true }
//     }
// });

$.index.open();
