// Auto generated by Testing Dashboard
// File        : scripts/Draw/Circle/CircleCD/Tests/CircleCDTest00.js
// Timestamp   : 2015-04-21 17:12:55
// Description : 

include('scripts/Pro/Developer/TestingDashboard/TdbTest.js');

function CircleCDTest00() {
    TdbTest.call(this, 'scripts/Draw/Circle/CircleCD/Tests/CircleCDTest00.js');
}

CircleCDTest00.prototype = new TdbTest();

CircleCDTest00.prototype.test00 = function() {
    qDebug('running CircleCDTest00.test00()...');
    this.setUp();
    TdbTest.clickOnWidget('MainWindow::CadQToolBar::CadToolBar::MainToolsPanel::CircleToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadQToolBar::CadToolBar::CircleToolsPanel::CircleCDButton');
    this.setToolOption('CircleCD/Diameter', '10');
    this.setToolOption('CircleCD/Angle', '0');
    this.setToolOption('CircleCD/ReferencePoint', '0');
    this.updateToolOptions();
    this.setZoom(10, new RVector(5, 5, 0, true));
    var p = new RVector(10, 19.9);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    // key: '2'
    this.pressAndReleaseKeyOnGv(0x32, 0);
    this.setZoom(10, new RVector(5, 5, 0, true));
    var p = new RVector(24.9, 20.3);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    // key: '3'
    this.pressAndReleaseKeyOnGv(0x33, 0);
    this.setZoom(10, new RVector(5, 5, 0, true));
    var p = new RVector(39.9, 20.1);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    // key: '4'
    this.pressAndReleaseKeyOnGv(0x34, 0);
    this.setZoom(10, new RVector(5, 5, 0, true));
    var p = new RVector(10, 5.1);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    // key: '5'
    this.pressAndReleaseKeyOnGv(0x35, 0);
    this.setZoom(10, new RVector(5, 5, 0, true));
    var p = new RVector(25, 5.4);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    // key: '6'
    this.pressAndReleaseKeyOnGv(0x36, 0);
    this.setZoom(10, new RVector(5, 5, 0, true));
    var p = new RVector(39.9, 4.6);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    // key: '7'
    this.pressAndReleaseKeyOnGv(0x37, 0);
    var p = new RVector(31.6, 5);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.MidButton, 4, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.MidButton, 0, 0);
    this.setZoom(10, new RVector(2, 17.9, 0, true));
    var p = new RVector(9.8, -10.3);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    // key: '8'
    this.pressAndReleaseKeyOnGv(0x38, 0);
    this.setZoom(10, new RVector(2, 17.9, 0, true));
    var p = new RVector(25.3, -10.1);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    // key: '9'
    this.pressAndReleaseKeyOnGv(0x39, 0);
    this.setZoom(10, new RVector(2, 17.9, 0, true));
    var p = new RVector(40, -9.8);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(45.4, 4.6);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(43.8, 5.5);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(43.7, 5.4);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('CircleCDTest00_000.dxf');
    this.tearDown();
    qDebug('finished CircleCDTest00.test00()');
};
