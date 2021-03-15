// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

// This shows the HTML page in "ui.html".
figma.showUI(__html__);
figma.ui.resize(440, 900);

//load our fonts!
async function loadFonts() {
  
	await Promise.all([
		figma.loadFontAsync({
			family: "Apercu Pro",
			style: "Regular"
			}),figma.loadFontAsync({
			family: "Apercu Pro",
			style: "Bold"
			}),
	])
  figma.closePlugin();
}



let createCover = (projectName, teamName, color) => {
  //create cover page
  var coverPage = figma.createPage()
  coverPage.name = "📗 COVER"
  figma.root.insertChild(0, coverPage)

  coverPage.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":color[0],"g":color[1],"b":color[2]}}]
  //set thumbnail page to current page
  figma.currentPage = coverPage
  
  // Create Cover Frame
  var coverFrame = figma.createFrame()
  coverFrame.resize(620.0000000000, 372.0000000000)
  coverFrame.name = "Cover"
  coverFrame.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":color[0],"g":color[1],"b":color[2]}}]
  coverFrame.paddingLeft = 40
  coverFrame.paddingRight = 40
  coverFrame.paddingTop = 40
  coverFrame.paddingBottom = 40
  coverFrame.itemSpacing = 189
  figma.currentPage.appendChild(coverFrame)

  var frame_7_60 = figma.createFrame()
  frame_7_60.resize(540.0000000000, 168.0000000000)
  frame_7_60.name = "Frame 1"
  frame_7_60.relativeTransform = [[1,0,40],[0,1,40]]
  frame_7_60.x = 40
  frame_7_60.y = 40
  frame_7_60.fills = []
  frame_7_60.backgrounds = []
  frame_7_60.clipsContent = false
  frame_7_60.layoutMode = "VERTICAL"
  frame_7_60.counterAxisSizingMode = "AUTO"
  frame_7_60.itemSpacing = 8
  coverFrame.appendChild(frame_7_60)

  // Create Project Name
  var projectNameText = figma.createText()
  projectNameText.resize(540.0000000000, 65.0000000000)
  projectNameText.name = "Project name"
  projectNameText.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
  projectNameText.strokeWeight = 0
  projectNameText.strokeAlign = "INSIDE"
  projectNameText.relativeTransform = [[1,0,40],[0,1,40]]
  projectNameText.x = 40
  projectNameText.y = 40
  loadFonts().then((res) => {
    projectNameText.fontName = {
      family: "Apercu Pro",
      style: "Bold"
    }
    projectNameText.characters = projectName
    projectNameText.textAutoResize = "HEIGHT"
    projectNameText.fontSize = 56
    projectNameText.letterSpacing = {"unit":"PERCENT","value":-5.5}
    projectNameText.lineHeight = {"unit":"PERCENT","value":114.99999761581421}
    projectNameText.fontName = {"family":"Apercu Pro","style":"Bold"}

  })
  frame_7_60.appendChild(projectNameText)

  

  // Create Team Name
  var teamNameText = figma.createText()
  teamNameText.resize(540.0000000000, 32.0000000000)
  teamNameText.name = "Team Name"
  teamNameText.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
  teamNameText.strokeWeight = 0
  teamNameText.strokeAlign = "CENTER"
  teamNameText.relativeTransform = [[1,0,40],[0,1,109]]
  teamNameText.x = 40
  teamNameText.y = 109
  teamNameText.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  teamNameText.autoRename = false
  loadFonts().then((res) => {
      teamNameText.fontName = {
        family: "Apercu Pro",
        style: "Regular"
      }
      teamNameText.characters = teamName
      teamNameText.fontSize = 24
      teamNameText.letterSpacing = {"unit":"PERCENT","value":-3}
      teamNameText.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
      teamNameText.fontName = {"family":"Apercu Pro","style":"Regular"}

  })
  frame_7_60.appendChild(teamNameText);
}



let createReadme = (projectName, projectDescription, productPOC, designPOC, engPOC, slackChannel) => {
  //create cover page
  var readmePage = figma.createPage()
  readmePage.name = "📖 README"
  figma.root.insertChild(1, readmePage)
  //set thumbnail page to current page
  figma.currentPage = readmePage
  
  // Create README FRAME
  var frame_1_39 = figma.createFrame()
  frame_1_39.resize(1120.0000000000, 1016.0000000000)
  frame_1_39.name = "Readme"
  frame_1_39.effects = [{"type":"DROP_SHADOW","color":{"r":0,"g":0,"b":0,"a":0.25},"offset":{"x":0,"y":4},"radius":4,"spread":0,"visible":true,"blendMode":"NORMAL"}]
  frame_1_39.relativeTransform = [[1,0,-560],[0,1,-1466]]
  frame_1_39.x = 0
  frame_1_39.y = 0
  frame_1_39.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
  frame_1_39.paddingLeft = 80
  frame_1_39.paddingRight = 80
  frame_1_39.paddingTop = 56
  frame_1_39.paddingBottom = 56
  frame_1_39.layoutMode = "VERTICAL"
  frame_1_39.counterAxisSizingMode = "AUTO"
  frame_1_39.itemSpacing = 56
  figma.currentPage.appendChild(frame_1_39)

  // Create FRAME
  var frame_1_42 = figma.createFrame()
  frame_1_42.resize(800.0000000000, 118.0000000000)
  frame_1_42.name = "Title+Description"
  frame_1_42.relativeTransform = [[1,0,80],[0,1,56]]
  frame_1_42.x = 80
  frame_1_42.y = 56
  frame_1_42.layoutMode = "VERTICAL"
  frame_1_42.counterAxisSizingMode = "AUTO"
  frame_1_42.itemSpacing = 22
  frame_1_39.appendChild(frame_1_42)

  // Create PROJECT TITLE
  var text_1_43 = figma.createText()
  text_1_43.resize(800.0000000000, 64.0000000000)
  text_1_43.name = "Project Title"
  text_1_43.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.22745098173618317,"g":0.2235294133424759,"b":0.21960784494876862}}]
  text_1_43.strokeWeight = 0
  text_1_43.strokeAlign = "INSIDE"
  text_1_43.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_1_43.autoRename = false
  loadFonts().then((res) => {
      text_1_43.fontName = {
        family: "Apercu Pro",
        style: "Bold"
      }
      text_1_43.characters = projectName
      text_1_43.fontSize = 56
      text_1_43.textAutoResize = "HEIGHT"
      text_1_43.letterSpacing = {"unit":"PERCENT","value":-5.5}
      text_1_43.lineHeight = {"unit":"PERCENT","value":114.99999761581421}
      text_1_43.fontName = {"family":"Apercu Pro","style":"Bold"}

  })
  frame_1_42.appendChild(text_1_43)

  // Create TEXT
  var text_1_44 = figma.createText()
  text_1_44.resize(800.0000000000, 32.0000000000)
  text_1_44.name = "Description"
  text_1_44.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.22745098173618317,"g":0.2235294133424759,"b":0.21960784494876862}}]
  text_1_44.strokeWeight = 0
  text_1_44.strokeAlign = "CENTER"
  text_1_44.relativeTransform = [[1,0,0],[0,1,86]]
  text_1_44.y = 86
  text_1_44.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_1_44.autoRename = false
  loadFonts().then((res) => {
      text_1_44.fontName = {
        family: "Apercu Pro",
        style: "Bold"
      }
      text_1_44.characters = projectDescription
      text_1_44.fontSize = 24
      text_1_44.textAutoResize = "HEIGHT"
      text_1_44.letterSpacing = {"unit":"PERCENT","value":-3}
      text_1_44.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
      text_1_44.fontName = {"family":"Apercu Pro","style":"Bold"}

  })
  frame_1_42.appendChild(text_1_44)

  // Create RECTANGLE
  var rectangle_1_45 = figma.createRectangle()
  rectangle_1_45.resize(960.0000000000, 2.0000000000)
  rectangle_1_45.name = "Divider"
  rectangle_1_45.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8941176533699036,"g":0.8980392217636108,"b":0.9058823585510254}}]
  rectangle_1_45.relativeTransform = [[1,0,80],[0,1,230]]
  rectangle_1_45.x = 80
  rectangle_1_45.y = 230
  frame_1_39.appendChild(rectangle_1_45)

  // Create FRAME
  var frame_1_46 = figma.createFrame()
  frame_1_46.resize(527.0000000000, 380.0000000000)
  frame_1_46.name = "Info"
  frame_1_46.relativeTransform = [[1,0,80],[0,1,288]]
  frame_1_46.x = 80
  frame_1_46.y = 288
  frame_1_46.fills = []
  frame_1_46.backgrounds = []
  frame_1_46.layoutMode = "VERTICAL"
  frame_1_46.counterAxisSizingMode = "AUTO"
  frame_1_46.itemSpacing = 40
  frame_1_39.appendChild(frame_1_46)

  // Create FRAME
  var frame_23_221 = figma.createFrame()
  frame_23_221.resize(527.0000000000, 380.0000000000)
  frame_23_221.name = "Frame 5"
  frame_23_221.fills = []
  frame_23_221.backgrounds = []
  frame_23_221.layoutMode = "VERTICAL"
  frame_23_221.counterAxisSizingMode = "AUTO"
  frame_23_221.itemSpacing = 40
  frame_1_46.appendChild(frame_23_221)

  // Create FRAME
  var frame_23_222 = figma.createFrame()
  frame_23_222.resize(460.0000000000, 128.0000000000)
  frame_23_222.name = "Frame 3"
  frame_23_222.layoutMode = "VERTICAL"
  frame_23_222.counterAxisSizingMode = "AUTO"
  frame_23_222.itemSpacing = 16
  frame_23_221.appendChild(frame_23_222)

  // Create TEXT
  var text_23_223 = figma.createText()
  text_23_223.resize(133.0000000000, 32.0000000000)
  text_23_223.name = "Colors"
  text_23_223.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.22745098173618317,"g":0.2235294133424759,"b":0.21960784494876862}}]
  text_23_223.strokeWeight = 0
  text_23_223.strokeAlign = "CENTER"
  text_23_223.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_223.autoRename = false
  loadFonts().then((res) => {
      text_23_223.fontName = {
        family: "Apercu Pro",
        style: "Bold"
      }
      text_23_223.characters = "Project team"
      text_23_223.fontSize = 24
      text_23_223.letterSpacing = {"unit":"PERCENT","value":-3}
      text_23_223.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
      text_23_223.fontName = {"family":"Apercu Pro","style":"Bold"}

  })
  frame_23_222.appendChild(text_23_223)

  // Create FRAME
  var frame_23_224 = figma.createFrame()
  frame_23_224.resize(460.0000000000, 80.0000000000)
  frame_23_224.name = "Frame 4"
  frame_23_224.relativeTransform = [[1,0,0],[0,1,48]]
  frame_23_224.y = 48
  frame_23_224.fills = []
  frame_23_224.backgrounds = []
  frame_23_224.layoutMode = "VERTICAL"
  frame_23_224.counterAxisSizingMode = "AUTO"
  frame_23_224.itemSpacing = 4
  frame_23_222.appendChild(frame_23_224)

  // Create TEXT
  var text_23_226 = figma.createText()
  text_23_226.resize(104.0000000000, 24.0000000000)
  text_23_226.name = "Colors"
  text_23_226.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3529411852359772,"g":0.3450980484485626,"b":0.34117648005485535}}]
  text_23_226.strokeWeight = 0
  text_23_226.strokeAlign = "CENTER"
  text_23_226.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_226.autoRename = false
  loadFonts().then((res) => {
      text_23_226.fontName = {
        family: "Apercu Pro",
        style: "Regular"
      }
      text_23_226.characters = "PM"
      text_23_226.fontSize = 18
      text_23_226.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
      text_23_226.fontName = {"family":"Apercu Pro","style":"Regular"}

  })
  frame_23_224.appendChild(text_23_226)

  // Create TEXT
  var text_23_227 = figma.createText()
  text_23_227.name = "Colors"
  text_23_227.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.18039216101169586,"g":0.4470588266849518,"b":0.8235294222831726}}]
  text_23_227.strokeWeight = 0
  text_23_227.strokeAlign = "CENTER"
  text_23_227.relativeTransform = [[1,0,400],[0,1,0]]
  text_23_227.x = 400
  text_23_227.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_227.autoRename = false
  loadFonts().then((res) => {
      text_23_227.fontName = {
        family: "Apercu Pro",
        style: "Regular"
      }
      text_23_227.characters = productPOC
      text_23_227.fontSize = 18
      text_23_227.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
      text_23_227.fontName = {"family":"Apercu Pro","style":"Regular"}

  })
  frame_23_224.appendChild(text_23_227)

  // Create GROUP
  var group_23_225 = figma.group([text_23_226, text_23_227], frame_23_224)
  group_23_225.name = "Group 9"
  group_23_225.visible = true
  group_23_225.locked = false
  group_23_225.opacity = 1
  group_23_225.blendMode = "PASS_THROUGH"
  group_23_225.isMask = false
  group_23_225.layoutAlign = "INHERIT"
  group_23_225.constrainProportions = false
  group_23_225.layoutGrow = 0

  group_23_225.expanded = true

  // Create TEXT
  var text_23_229 = figma.createText()
  text_23_229.resize(93.0000000000, 24.0000000000)
  text_23_229.name = "Colors"
  text_23_229.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3529411852359772,"g":0.3450980484485626,"b":0.34117648005485535}}]
  text_23_229.strokeWeight = 0
  text_23_229.strokeAlign = "CENTER"
  text_23_229.relativeTransform = [[1,0,0],[0,1,28]]
  text_23_229.y = 28
  text_23_229.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_229.autoRename = false
  loadFonts().then((res) => {
      text_23_229.fontName = {
        family: "Apercu Pro",
        style: "Regular"
      }
      text_23_229.characters = "Design"
      text_23_229.fontSize = 18
      text_23_229.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
      text_23_229.fontName = {"family":"Apercu Pro","style":"Regular"}

  })
  frame_23_224.appendChild(text_23_229)

  // Create TEXT
  var text_23_230 = figma.createText()
  text_23_230.name = "Colors"
  text_23_230.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.18039216101169586,"g":0.4470588266849518,"b":0.8235294222831726}}]
  text_23_230.strokeWeight = 0
  text_23_230.strokeAlign = "CENTER"
  text_23_230.relativeTransform = [[1,0,400],[0,1,28]]
  text_23_230.x = 400
  text_23_230.y = 28
  text_23_230.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_230.autoRename = false
  loadFonts().then((res) => {
      text_23_230.fontName = {
        family: "Apercu Pro",
        style: "Regular"
      }
      text_23_230.characters = designPOC
      text_23_230.fontSize = 18
      text_23_230.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
      text_23_230.fontName = {"family":"Apercu Pro","style":"Regular"}

  })
  frame_23_224.appendChild(text_23_230)

  // Create GROUP
  var group_23_228 = figma.group([text_23_229, text_23_230], frame_23_224)
  group_23_228.name = "Group 10"
  group_23_228.visible = true
  group_23_228.locked = false
  group_23_228.opacity = 1
  group_23_228.blendMode = "PASS_THROUGH"
  group_23_228.isMask = false
  group_23_228.layoutAlign = "INHERIT"
  group_23_228.constrainProportions = false
  group_23_228.layoutGrow = 0

  group_23_228.expanded = true

  // Create TEXT
  var text_23_232 = figma.createText()
  text_23_232.resize(133.0000000000, 24.0000000000)
  text_23_232.name = "Colors"
  text_23_232.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3529411852359772,"g":0.3450980484485626,"b":0.34117648005485535}}]
  text_23_232.strokeWeight = 0
  text_23_232.strokeAlign = "CENTER"
  text_23_232.relativeTransform = [[1,0,0],[0,1,56]]
  text_23_232.y = 56
  text_23_232.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_232.autoRename = false
  loadFonts().then((res) => {
      text_23_232.fontName = {
        family: "Apercu Pro",
        style: "Regular"
      }
      text_23_232.characters = "Engineering"
      text_23_232.fontSize = 18
      text_23_232.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
      text_23_232.fontName = {"family":"Apercu Pro","style":"Regular"}

  })
  frame_23_224.appendChild(text_23_232)

  // Create TEXT
  var text_23_233 = figma.createText()
  text_23_233.name = "Colors"
  text_23_233.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.18039216101169586,"g":0.4470588266849518,"b":0.8235294222831726}}]
  text_23_233.strokeWeight = 0
  text_23_233.strokeAlign = "CENTER"
  text_23_233.relativeTransform = [[1,0,400],[0,1,56]]
  text_23_233.x = 400
  text_23_233.y = 56
  text_23_233.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_233.autoRename = false
  loadFonts().then((res) => {
      text_23_233.fontName = {
        family: "Apercu Pro",
        style: "Regular"
      }
      text_23_233.characters = engPOC
      text_23_233.fontSize = 18
      text_23_233.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
      text_23_233.fontName = {"family":"Apercu Pro","style":"Regular"}

  })
  frame_23_224.appendChild(text_23_233)

  // Create GROUP
  var group_23_231 = figma.group([text_23_232, text_23_233], frame_23_224)
  group_23_231.name = "Group 11"
  group_23_231.visible = true
  group_23_231.locked = false
  group_23_231.opacity = 1
  group_23_231.blendMode = "PASS_THROUGH"
  group_23_231.isMask = false
  group_23_231.layoutAlign = "INHERIT"
  group_23_231.constrainProportions = false
  group_23_231.layoutGrow = 0

  group_23_231.expanded = true

  // Create FRAME
  var frame_23_240 = figma.createFrame()
  frame_23_240.resize(527.0000000000, 72.0000000000)
  frame_23_240.name = "Frame 4"
  frame_23_240.relativeTransform = [[1,0,0],[0,1,168]]
  frame_23_240.y = 168
  frame_23_240.layoutMode = "VERTICAL"
  frame_23_240.counterAxisSizingMode = "AUTO"
  frame_23_240.itemSpacing = 16
  frame_23_221.appendChild(frame_23_240)

  // Create TEXT
  var text_23_241 = figma.createText()
  text_23_241.resize(142.0000000000, 32.0000000000)
  text_23_241.name = "Colors"
  text_23_241.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.22745098173618317,"g":0.2235294133424759,"b":0.21960784494876862}}]
  text_23_241.strokeWeight = 0
  text_23_241.strokeAlign = "CENTER"
  text_23_241.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_241.autoRename = false
  loadFonts().then((res) => {
      text_23_241.fontName = {
        family: "Apercu Pro",
        style: "Bold"
      }
      text_23_241.characters = "Slack channel"
      text_23_241.fontSize = 24
      text_23_241.letterSpacing = {"unit":"PERCENT","value":-3}
      text_23_241.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
      text_23_241.fontName = {"family":"Apercu Pro","style":"Bold"}

  })
  frame_23_240.appendChild(text_23_241)

  // Create FRAME
  var frame_23_242 = figma.createFrame()
  frame_23_242.resize(527.0000000000, 24.0000000000)
  frame_23_242.name = "Frame 4"
  frame_23_242.relativeTransform = [[1,0,0],[0,1,48]]
  frame_23_242.y = 48
  frame_23_242.counterAxisAlignItems = "CENTER"
  frame_23_242.layoutMode = "VERTICAL"
  frame_23_242.counterAxisSizingMode = "AUTO"
  frame_23_242.itemSpacing = 4
  frame_23_240.appendChild(frame_23_242)

  // Create TEXT
  var text_23_244 = figma.createText()
  text_23_244.resize(135.0000000000, 24.0000000000)
  text_23_244.name = "Colors"
  text_23_244.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3529411852359772,"g":0.3450980484485626,"b":0.34117648005485535}}]
  text_23_244.strokeWeight = 0
  text_23_244.strokeAlign = "CENTER"
  text_23_244.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_244.autoRename = false
  loadFonts().then((res) => {
      text_23_244.fontName = {
        family: "Apercu Pro",
        style: "Regular"
      }
      text_23_244.characters = "To find out more:"
      text_23_244.fontSize = 18
      text_23_244.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
      text_23_244.fontName = {"family":"Apercu Pro","style":"Regular"}

  })
  frame_23_242.appendChild(text_23_244)

  // Create TEXT
  var text_23_245 = figma.createText()
  text_23_245.resize(127.0000000000, 24.0000000000)
  text_23_245.name = "Colors"
  text_23_245.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.18039216101169586,"g":0.4470588266849518,"b":0.8235294222831726}}]
  text_23_245.strokeWeight = 0
  text_23_245.strokeAlign = "CENTER"
  text_23_245.relativeTransform = [[1,0,400],[0,1,0]]
  text_23_245.x = 400
  text_23_245.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_245.autoRename = false
  loadFonts().then((res) => {
      text_23_245.fontName = {
        family: "Apercu Pro",
        style: "Regular"
      }
      text_23_245.characters = slackChannel
      text_23_245.fontSize = 18
      text_23_245.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
      text_23_245.fontName = {"family":"Apercu Pro","style":"Regular"}

  })
  frame_23_242.appendChild(text_23_245)

  // Create GROUP
  var group_23_243 = figma.group([text_23_244, text_23_245], frame_23_242)
  group_23_243.name = "Group 12"
  group_23_243.visible = true
  group_23_243.locked = false
  group_23_243.opacity = 1
  group_23_243.blendMode = "PASS_THROUGH"
  group_23_243.isMask = false
  group_23_243.layoutAlign = "INHERIT"
  group_23_243.constrainProportions = false
  group_23_243.layoutGrow = 0
  group_23_243.expanded = true

  // Create FRAME
  var frame_23_246 = figma.createFrame()
  frame_23_246.resize(460.0000000000, 100.0000000000)
  frame_23_246.name = "Frame 5"
  frame_23_246.relativeTransform = [[1,0,0],[0,1,280]]
  frame_23_246.y = 280
  frame_23_246.layoutMode = "VERTICAL"
  frame_23_246.counterAxisSizingMode = "AUTO"
  frame_23_246.itemSpacing = 16
  frame_23_221.appendChild(frame_23_246)

  // Create TEXT
  var text_23_247 = figma.createText()
  text_23_247.resize(54.0000000000, 32.0000000000)
  text_23_247.name = "Colors"
  text_23_247.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.22745098173618317,"g":0.2235294133424759,"b":0.21960784494876862}}]
  text_23_247.strokeWeight = 0
  text_23_247.strokeAlign = "CENTER"
  text_23_247.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_247.autoRename = false
  loadFonts().then((res) => {
      text_23_247.fontName = {
        family: "Apercu Pro",
        style: "Bold"
      }
      text_23_247.characters = "Links"
      text_23_247.fontSize = 24
      text_23_247.letterSpacing = {"unit":"PERCENT","value":-3}
      text_23_247.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
      text_23_247.fontName = {"family":"Apercu Pro","style":"Bold"}

  })
  frame_23_246.appendChild(text_23_247)

  // Create FRAME
  var frame_23_248 = figma.createFrame()
  frame_23_248.resize(460.0000000000, 52.0000000000)
  frame_23_248.name = "Frame 4"
  frame_23_248.relativeTransform = [[1,0,0],[0,1,48]]
  frame_23_248.y = 48
  frame_23_248.fills = []
  frame_23_248.counterAxisAlignItems = "CENTER"
  frame_23_248.layoutMode = "VERTICAL"
  frame_23_248.counterAxisSizingMode = "AUTO"
  frame_23_248.itemSpacing = 4
  frame_23_246.appendChild(frame_23_248)

  // Create TEXT
  var text_23_250 = figma.createText()
  text_23_250.resize(99.0000000000, 24.0000000000)
  text_23_250.name = "Colors"
  text_23_250.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3529411852359772,"g":0.3450980484485626,"b":0.34117648005485535}}]
  text_23_250.strokeWeight = 0
  text_23_250.strokeAlign = "CENTER"
  text_23_250.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_250.autoRename = false
  loadFonts().then((res) => {
      text_23_250.fontName = {
        family: "Apercu Pro",
        style: "Regular"
      }
      text_23_250.characters = "Project brief"
      text_23_250.fontSize = 18
      text_23_250.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
      text_23_250.fontName = {"family":"Apercu Pro","style":"Regular"}

  })
  frame_23_248.appendChild(text_23_250)

  // Create TEXT
  var text_23_251 = figma.createText()
  text_23_251.resize(60.0000000000, 24.0000000000)
  text_23_251.name = "Colors"
  text_23_251.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.18039216101169586,"g":0.4470588266849518,"b":0.8235294222831726}}]
  text_23_251.strokeWeight = 0
  text_23_251.strokeAlign = "CENTER"
  text_23_251.relativeTransform = [[1,0,400],[0,1,0]]
  text_23_251.x = 400
  text_23_251.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_251.autoRename = false
  loadFonts().then((res) => {
      text_23_251.fontName = {
        family: "Apercu Pro",
        style: "Regular"
      }
      text_23_251.characters = "https://"
      text_23_251.fontSize = 18
      text_23_251.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
      text_23_251.fontName = {"family":"Apercu Pro","style":"Regular"}

  })
  frame_23_248.appendChild(text_23_251)

  // Create GROUP
  var group_23_249 = figma.group([text_23_250, text_23_251], frame_23_248)
  group_23_249.name = "Group 9"
  group_23_249.visible = true
  group_23_249.locked = false
  group_23_249.opacity = 1
  group_23_249.blendMode = "PASS_THROUGH"
  group_23_249.isMask = false
  group_23_249.layoutAlign = "INHERIT"
  group_23_249.constrainProportions = false
  group_23_249.layoutGrow = 0
  group_23_249.expanded = true

  // Create RECTANGLE
  var rectangle_1_52 = figma.createRectangle()
  rectangle_1_52.resize(960.0000000000, 2.0000000000)
  rectangle_1_52.name = "Rectangle 2"
  rectangle_1_52.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8941176533699036,"g":0.8980392217636108,"b":0.9058823585510254}}]
  rectangle_1_52.relativeTransform = [[1,0,80],[0,1,724]]
  rectangle_1_52.x = 80
  rectangle_1_52.y = 724
  frame_1_39.appendChild(rectangle_1_52)

  // Create FRAME
  var frame_1_59 = figma.createFrame()
  frame_1_59.resize(960.0000000000, 120.0000000000)
  frame_1_59.name = "Frame 7"
  frame_1_59.relativeTransform = [[1,0,80],[0,1,782]]
  frame_1_59.x = 80
  frame_1_59.y = 782
  frame_1_59.layoutMode = "VERTICAL"
  frame_1_59.counterAxisSizingMode = "AUTO"
  frame_1_59.itemSpacing = 40
  frame_1_39.appendChild(frame_1_59)

  // Create FRAME
  var frame_1_60 = figma.createFrame()
  frame_1_60.resize(960.0000000000, 120.0000000000)
  frame_1_60.name = "Frame 3"
  frame_1_60.layoutMode = "VERTICAL"
  frame_1_60.counterAxisSizingMode = "AUTO"
  frame_1_60.itemSpacing = 16
  frame_1_59.appendChild(frame_1_60)

  // Create TEXT
  var text_1_61 = figma.createText()
  text_1_61.resize(98.0000000000, 32.0000000000)
  text_1_61.name = "Colors"
  text_1_61.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.22745098173618317,"g":0.2235294133424759,"b":0.21960784494876862}}]
  text_1_61.strokeWeight = 0
  text_1_61.strokeAlign = "CENTER"
  text_1_61.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_1_61.autoRename = false
  loadFonts().then((res) => {
      text_1_61.fontName = {
        family: "Apercu Pro",
        style: "Bold"
      }
      text_1_61.characters = "Overview"
      text_1_61.fontSize = 24
      text_1_61.letterSpacing = {"unit":"PERCENT","value":-3}
      text_1_61.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
      text_1_61.fontName = {"family":"Apercu Pro","style":"Bold"}

  })
  frame_1_60.appendChild(text_1_61)

  // Create FRAME
  var frame_1_62 = figma.createFrame()
  frame_1_62.resize(960.0000000000, 72.0000000000)
  frame_1_62.name = "Frame 4"
  frame_1_62.relativeTransform = [[1,0,0],[0,1,48]]
  frame_1_62.y = 48
  frame_1_62.counterAxisAlignItems = "CENTER"
  frame_1_62.layoutMode = "VERTICAL"
  frame_1_62.counterAxisSizingMode = "AUTO"
  frame_1_62.itemSpacing = 4
  frame_1_60.appendChild(frame_1_62)

  // Create TEXT
  var text_1_64 = figma.createText()
  text_1_64.resize(960.0000000000, 72.0000000000)
  text_1_64.name = "Colors"
  text_1_64.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3529411852359772,"g":0.3450980484485626,"b":0.34117648005485535}}]
  text_1_64.strokeWeight = 0
  text_1_64.strokeAlign = "CENTER"
  text_1_64.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_1_64.autoRename = false
  loadFonts().then((res) => {
      text_1_64.fontName = {
        family: "Apercu Pro",
        style: "Regular"
      }
      text_1_64.characters = "The overview page is another opportunity to provide more context. Help others with finding additional resources and provide information on who they can reach out to with feedback or questions. Feel free to add or remove sections and line items as needed and consider adding separate links to documents like project briefs or research."
      text_1_64.fontSize = 18
      text_1_64.textAutoResize = "HEIGHT"
      text_1_64.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
      text_1_64.fontName = {"family":"Apercu Pro","style":"Regular"}

  })
  frame_1_62.appendChild(text_1_64)

  // Create GROUP
  var group_1_63 = figma.group([text_1_64], frame_1_62)
  group_1_63.name = "Group 9"
  group_1_63.visible = true
  group_1_63.locked = false
  group_1_63.opacity = 1
  group_1_63.blendMode = "PASS_THROUGH"
  group_1_63.isMask = false
  group_1_63.layoutAlign = "INHERIT"
  group_1_63.constrainProportions = false
  group_1_63.layoutGrow = 0
  group_1_63.expanded = true

  // Create RECTANGLE
  var rectangle_1_65 = figma.createRectangle()
  rectangle_1_65.resize(960.0000000000, 2.0000000000)
  rectangle_1_65.name = "Rectangle 3"
  rectangle_1_65.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8941176533699036,"g":0.8980392217636108,"b":0.9058823585510254}}]
  rectangle_1_65.relativeTransform = [[1,0,80],[0,1,958]]
  rectangle_1_65.x = 80
  rectangle_1_65.y = 958
  frame_1_39.appendChild(rectangle_1_65)

  
}

//create function to easily make pages
//places at bottom of page list
var createPage = (nameString) => {
  let page = figma.createPage();
  page.name = nameString;
  figma.root.appendChild(page)
}

var createEngHandoff = () => {
  createPage("------⚒️ ENG HANDOFF ------");
  createPage("iOS - Mobile");
  createPage("iOS - Tablet");
  createPage("Android - Mobile");
  createPage("Android - Tablet");
  createPage("Web");
}

var createUserTesting = () => {
  createPage("------ 🔬USER TESTING ------");
  createPage("Prototype 1");
}

var createExplore = () => {
  createPage("------  🔮 EXPLORE ------");
  createPage("Explorations V0");
}

var createThink = () => {
  createPage("---------- 🤔 THINK ----------");
  createPage("Research");
}

var createArchive = () => {
  createPage("----------------------------------------");
  createPage("📦 ARCHIVE");
}

var createLocalComponents = () => {
  createPage("----------------------------------------");
  createPage("LOCAL COMPONENTS");
}

figma.ui.onmessage = (event) => {
  if (event.type === "createProject") {
    createCover(event.projectName, event.teamName, event.color);
    createReadme(event.projectName, event.projectDescription, event.productPOC, event.designPOC, event.engPOC, event.slackChannel);
    createEngHandoff();
    createUserTesting();
    createExplore();
    createThink();
    createArchive();
    createLocalComponents();
    
  }
  
}
