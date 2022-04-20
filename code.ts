//set up NEW FILE
if (figma.command === "setUpNewFile") {
  figma.showUI(__html__);
  figma.ui.resize(440, 900);  
}

//set file status to COMPLETE
if (figma.command === "setFileStatusToComplete") {
  //set page to first page that IF first page is named correctly
  const firstPage = figma.root.children[0]
  // figma.currentPage = firstPage

  //look for status node in current page
  const component = firstPage.findAllWithCriteria({
    types: ['INSTANCE']
  })
  //loop through all component intstances on page and check their parent
  for (let i = 0; i < component.length; i++) {
    console.log(component[i].mainComponent.parent.name)
    if (component[i].mainComponent.parent.name === "FILE-STATUS") {
      component[i].setProperties({"STATUS": "COMPLETE"})
      figma.notify("Set file status to ✅ COMPLETE")
    }
    else {
      figma.notify("⚠️ Unable to update status. Try running SET UP NEW FILE", {error: true})
    }
  }
  figma.closePlugin()
} 

//set file status to IN PROGRESS
if (figma.command === "setFileStatusToInProgress") {
  //set page to first page that IF first page is named correctly
  const firstPage = figma.root.children[0]
  // figma.currentPage = firstPage

  //look for status node in current page
  const component = firstPage.findAllWithCriteria({
    types: ['INSTANCE']
  })
  //loop through all component intstances on page and check their parent
  for (let i = 0; i < component.length; i++) {
    console.log(component[i].mainComponent.parent.name)
    if (component[i].mainComponent.parent.name === "FILE-STATUS") {
      component[i].setProperties({"STATUS": "IN PROGRESS"})
      figma.notify("Set file status to ✍️ IN PROGRESS")
    }
    else {
      figma.notify("⚠️ Unable to update status. Try running SET UP NEW FILE", {error: true})
    }
  }
  figma.closePlugin()
} 

//set file status to READY FOR ENG
if (figma.command === "setFileStatusToReadyForEng") {
  //set page to first page that IF first page is named correctly
  const firstPage = figma.root.children[0]
  // figma.currentPage = firstPage

  //look for status node in current page
  const component = firstPage.findAllWithCriteria({
    types: ['INSTANCE']
  })
  //loop through all component intstances on page and check their parent
  for (let i = 0; i < component.length; i++) {
    console.log(component[i].mainComponent.parent.name)
    if (component[i].mainComponent.parent.name === "FILE-STATUS") {
      component[i].setProperties({"STATUS": "READY FOR ENG"})
      figma.notify("Set file status to 🛠 READY FOR ENG")
    }
    else {
      figma.notify("⚠️ Unable to update status. Try running SET UP NEW FILE", {error: true})
    }
  }
  figma.closePlugin()
} 

//set file status to IN REVIEW
if (figma.command === "setFileStatusToInReview") {
  const firstPage = figma.root.children[0]
  //look for status node in current page
  const component = firstPage.findAllWithCriteria({
    types: ['INSTANCE']
  })
  //loop through all component intstances on page and check their parent
  for (let i = 0; i < component.length; i++) {
    console.log(component[i].mainComponent.parent.name)
    if (component[i].mainComponent.parent.name === "FILE-STATUS") {
      component[i].setProperties({"STATUS": "IN REVIEW"})
      figma.notify("Set file status to 👀 IN REVIEW")
    }
    else {
      figma.notify("⚠️ Unable to update status. Try running SET UP NEW FILE", {error: true})
    }
  }
  figma.closePlugin()
}

//set file status to PAUSED
if (figma.command === "setFileStatusToPaused") {
  const firstPage = figma.root.children[0]
  //look for status node in current page
  const component = firstPage.findAllWithCriteria({
    types: ['INSTANCE']
  })
  //loop through all component intstances on page and check their parent
  for (let i = 0; i < component.length; i++) {
    console.log(component[i].mainComponent.parent.name)
    if (component[i].mainComponent.parent.name === "FILE-STATUS") {
      component[i].setProperties({"STATUS": "PAUSED"})
      figma.notify("Set file status to ⏸  PAUSED")
    }
    else {
      figma.notify("⚠️ Unable to update status. Try running SET UP NEW FILE", {error: true})
    }
  }
  figma.closePlugin()
}




//load roboto
async function loadRoboto() {
	await Promise.all([
		figma.loadFontAsync({family: "Roboto", style: "Regular"}),
    figma.loadFontAsync({family: "Roboto", style: "Bold"}),
    figma.loadFontAsync({family: "Roboto", style: "ExtraBold"}),
	])
}

let createCover = (projectName, teamName, color, textColor) => {
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

  var coverPageFrame = figma.createFrame()
  coverPageFrame.resize(540.0000000000, 168.0000000000)
  coverPageFrame.name = "Frame 1"
  coverPageFrame.relativeTransform = [[1,0,40],[0,1,40]]
  coverPageFrame.x = 40
  coverPageFrame.y = 40
  coverPageFrame.fills = []
  coverPageFrame.backgrounds = []
  coverPageFrame.clipsContent = false
  coverPageFrame.layoutMode = "VERTICAL"
  coverPageFrame.counterAxisSizingMode = "AUTO"
  coverPageFrame.itemSpacing = 8

  coverFrame.appendChild(coverPageFrame)

  // Create Project Name
  var projectNameText = figma.createText()
  projectNameText.resize(540.0000000000, 65.0000000000)
  projectNameText.name = "Project name"
  projectNameText.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":textColor[0],"g":textColor[1],"b":textColor[2]}}]
  projectNameText.strokeWeight = 0
  projectNameText.strokeAlign = "INSIDE"
  projectNameText.relativeTransform = [[1,0,40],[0,1,40]]
  projectNameText.x = 40
  projectNameText.y = 40
  projectNameText.fontName = {
    family: "Roboto",
    style: "Bold"
  }
  projectNameText.characters = projectName
  projectNameText.textAutoResize = "HEIGHT"
  projectNameText.fontSize = 56
  projectNameText.letterSpacing = {"unit":"PERCENT","value":-5.5}
  projectNameText.lineHeight = {"unit":"PERCENT","value":114.99999761581421}


  

  // Create Team Name
  var teamNameText = figma.createText()
  teamNameText.resize(540.0000000000, 32.0000000000)
  teamNameText.name = "Team Name"
  teamNameText.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":textColor[0],"g":textColor[1],"b":textColor[2]}}]
  teamNameText.strokeWeight = 0
  teamNameText.strokeAlign = "CENTER"
  teamNameText.relativeTransform = [[1,0,40],[0,1,109]]
  teamNameText.x = 40
  teamNameText.y = 109
  teamNameText.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  teamNameText.fontName = {
    family: "Roboto",
    style: "Regular"
  }
  teamNameText.characters = teamName
  teamNameText.fontSize = 24
  teamNameText.letterSpacing = {"unit":"PERCENT","value":-3}
  teamNameText.lineHeight = {"unit":"PERCENT","value":132.00000524520874}


  //CREATE STATUS COMPONENT
  var inProgress = figma.createComponent()
  inProgress.resize(177.0000000000, 51.0000000000)
  inProgress.primaryAxisSizingMode = "AUTO"
  inProgress.counterAxisSizingMode = "AUTO"
  inProgress.name = "STATUS=IN PROGRESS"
  inProgress.effects = [{"type":"DROP_SHADOW","color":{"r":0,"g":0,"b":0,"a":0.10000000149011612},"offset":{"x":0,"y":6},"radius":10,"spread":0,"visible":true,"blendMode":"NORMAL","showShadowBehindNode":false}]
  inProgress.relativeTransform = [[1,0,20],[0,1,20]]
  inProgress.x = 20
  inProgress.y = 20
  inProgress.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":0.6597222685813904,"b":0.125}}]
  inProgress.cornerRadius = 40
  inProgress.paddingLeft = 24
  inProgress.paddingRight = 24
  inProgress.paddingTop = 16
  inProgress.paddingBottom = 16
  inProgress.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":0.6597222685813904,"b":0.125}}]
  inProgress.layoutMode = "HORIZONTAL"
  inProgress.counterAxisSizingMode = "AUTO"
  inProgress.description = ""
  inProgress.documentationLinks = []

  // Create TEXT
  var inProgressText = figma.createText()
  inProgressText.resize(129.0000000000, 19.0000000000)
  inProgressText.name = "In Progress"
  inProgressText.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
  inProgressText.relativeTransform = [[1,0,24],[0,1,16]]
  inProgressText.x = 24
  inProgressText.y = 16
  inProgressText.hyperlink = null
  inProgressText.fontName = {
    family: "Roboto",
    style: "ExtraBold"
  }
  inProgressText.characters = "✍️  In Progress"
  inProgressText.fontSize = 16
  inProgressText.textCase = "UPPER"
  inProgressText.letterSpacing = {"unit":"PERCENT","value":1}
  inProgressText.fontName = {"family":"Roboto","style":"ExtraBold"}
  inProgressText.textAlignHorizontal = "CENTER"
  inProgressText.textAlignVertical = "BOTTOM"
  inProgressText.textAutoResize = "WIDTH_AND_HEIGHT"
  inProgress.appendChild(inProgressText)

  // Create COMPONENT
  var complete = figma.createComponent()
  complete.resize(157.0000000000, 51.0000000000)
  complete.primaryAxisSizingMode = "AUTO"
  complete.counterAxisSizingMode = "AUTO"
  complete.name = "STATUS=COMPLETE"
  complete.effects = [{"type":"DROP_SHADOW","color":{"r":0,"g":0,"b":0,"a":0.10000000149011612},"offset":{"x":0,"y":6},"radius":10,"spread":0,"visible":true,"blendMode":"NORMAL","showShadowBehindNode":false}]
  complete.relativeTransform = [[1,0,20],[0,1,91]]
  complete.x = 20
  complete.y = 91
  complete.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.21156379580497742,"g":0.8083333373069763,"b":0.10777777433395386}}]
  complete.cornerRadius = 40
  complete.paddingLeft = 24
  complete.paddingRight = 24
  complete.paddingTop = 16
  complete.paddingBottom = 16
  complete.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.21156379580497742,"g":0.8083333373069763,"b":0.10777777433395386}}]
  complete.layoutMode = "HORIZONTAL"
  complete.counterAxisSizingMode = "AUTO"
  complete.description = ""
  complete.documentationLinks = []

  // Create TEXT
  var completeText = figma.createText()
  completeText.resize(109.0000000000, 19.0000000000)
  completeText.name = "In Progress"
  completeText.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
  completeText.relativeTransform = [[1,0,24],[0,1,16]]
  completeText.x = 24
  completeText.y = 16
  completeText.hyperlink = null
  completeText.fontName = {
    family: "Roboto",
    style: "ExtraBold"
  }
  completeText.characters = "✅  COMPLETE"
  completeText.fontSize = 16
  completeText.textCase = "UPPER"
  completeText.letterSpacing = {"unit":"PERCENT","value":1}
  completeText.fontName = {"family":"Roboto","style":"ExtraBold"}
  completeText.textAlignHorizontal = "CENTER"
  completeText.textAlignVertical = "BOTTOM"
  completeText.textAutoResize = "WIDTH_AND_HEIGHT"


  complete.appendChild(completeText)

  // Create COMPONENT
  var readyForEng = figma.createComponent()
  readyForEng.resize(194.0000000000, 51.0000000000)
  readyForEng.primaryAxisSizingMode = "AUTO"
  readyForEng.counterAxisSizingMode = "AUTO"
  readyForEng.name = "STATUS=READY FOR ENG"
  readyForEng.effects = [{"type":"DROP_SHADOW","color":{"r":0,"g":0,"b":0,"a":0.10000000149011612},"offset":{"x":0,"y":6},"radius":10,"spread":0,"visible":true,"blendMode":"NORMAL","showShadowBehindNode":false}]
  readyForEng.relativeTransform = [[1,0,20],[0,1,162]]
  readyForEng.x = 20
  readyForEng.y = 162
  readyForEng.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
  readyForEng.cornerRadius = 40
  readyForEng.paddingLeft = 24
  readyForEng.paddingRight = 24
  readyForEng.paddingTop = 16
  readyForEng.paddingBottom = 16
  readyForEng.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0,"g":0,"b":0}}]
  readyForEng.layoutMode = "HORIZONTAL"
  readyForEng.counterAxisSizingMode = "AUTO"
  readyForEng.description = ""
  readyForEng.documentationLinks = []

  // Create TEXT
  var readyForEngText = figma.createText()
  readyForEngText.resize(146.0000000000, 19.0000000000)
  readyForEngText.name = "In Progress"
  readyForEngText.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
  readyForEngText.relativeTransform = [[1,0,24],[0,1,16]]
  readyForEngText.x = 24
  readyForEngText.y = 16
  readyForEngText.hyperlink = null
  readyForEngText.fontName = {
    family: "Roboto",
    style: "ExtraBold"
  }
  readyForEngText.characters = "🛠  Ready for eng"
  readyForEngText.fontSize = 16
  readyForEngText.textCase = "UPPER"
  readyForEngText.letterSpacing = {"unit":"PERCENT","value":1}
  readyForEngText.fontName = {"family":"Roboto","style":"ExtraBold"}
  readyForEngText.textAlignHorizontal = "CENTER"
  readyForEngText.textAlignVertical = "BOTTOM"
  readyForEngText.textAutoResize = "WIDTH_AND_HEIGHT"
  readyForEng.appendChild(readyForEngText)

  // Create COMPONENT
  var paused = figma.createComponent()
  paused.resize(133.0000000000, 51.0000000000)
  paused.primaryAxisSizingMode = "AUTO"
  paused.counterAxisSizingMode = "AUTO"
  paused.name = "STATUS=PAUSED"
  paused.effects = [{"type":"DROP_SHADOW","color":{"r":0,"g":0,"b":0,"a":0.10000000149011612},"offset":{"x":0,"y":6},"radius":10,"spread":0,"visible":true,"blendMode":"NORMAL","showShadowBehindNode":false}]
  paused.relativeTransform = [[1,0,20],[0,1,233]]
  paused.x = 20
  paused.y = 233
  paused.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.28333336114883423,"g":0.6475410461425781,"b":1}}]
  paused.cornerRadius = 40
  paused.paddingLeft = 24
  paused.paddingRight = 24
  paused.paddingTop = 16
  paused.paddingBottom = 16
  paused.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.28333336114883423,"g":0.6475410461425781,"b":1}}]
  paused.layoutMode = "HORIZONTAL"
  paused.counterAxisSizingMode = "AUTO"
  paused.description = ""
  paused.documentationLinks = []

  // Create TEXT
  var pausedText = figma.createText()
  pausedText.resize(85.0000000000, 19.0000000000)
  pausedText.name = "In Progress"
  pausedText.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
  pausedText.relativeTransform = [[1,0,24],[0,1,16]]
  pausedText.x = 24
  pausedText.y = 16
  pausedText.hyperlink = null
  pausedText.fontName = {
    family: "Roboto",
    style: "ExtraBold"
  }
  pausedText.characters = "⏸  PAUSED"
  pausedText.fontSize = 16
  pausedText.textCase = "UPPER"
  pausedText.letterSpacing = {"unit":"PERCENT","value":1}
  pausedText.fontName = {"family":"Roboto","style":"ExtraBold"}
  pausedText.textAlignHorizontal = "CENTER"
  pausedText.textAlignVertical = "BOTTOM"
  pausedText.textAutoResize = "WIDTH_AND_HEIGHT"
  paused.appendChild(pausedText)

  // Create COMPONENT
  var inReview = figma.createComponent()
  inReview.resize(152.0000000000, 51.0000000000)
  inReview.primaryAxisSizingMode = "AUTO"
  inReview.counterAxisSizingMode = "AUTO"
  inReview.name = "STATUS=IN REVIEW"
  inReview.effects = [{"type":"DROP_SHADOW","color":{"r":0,"g":0,"b":0,"a":0.10000000149011612},"offset":{"x":0,"y":6},"radius":10,"spread":0,"visible":true,"blendMode":"NORMAL","showShadowBehindNode":false}]
  inReview.relativeTransform = [[1,0,20],[0,1,304]]
  inReview.x = 20
  inReview.y = 304
  inReview.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.686274528503418,"g":0.32156863808631897,"b":0.8705882430076599}}]
  inReview.cornerRadius = 40
  inReview.paddingLeft = 24
  inReview.paddingRight = 24
  inReview.paddingTop = 16
  inReview.paddingBottom = 16
  inReview.backgrounds = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.686274528503418,"g":0.32156863808631897,"b":0.8705882430076599}}]
  inReview.layoutMode = "HORIZONTAL"
  inReview.counterAxisSizingMode = "AUTO"
  inReview.description = ""
  inReview.documentationLinks = []

  // Create TEXT
  var inReviewText = figma.createText()
  inReviewText.resize(104.0000000000, 19.0000000000)
  inReviewText.name = "In Progress"
  inReviewText.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":1,"g":1,"b":1}}]
  inReviewText.relativeTransform = [[1,0,24],[0,1,16]]
  inReviewText.x = 24
  inReviewText.y = 16
  inReviewText.hyperlink = null
  inReviewText.fontName = {
    family: "Roboto",
    style: "ExtraBold"
  }
  inReviewText.characters = "👀  IN REVIEW"
  inReviewText.fontSize = 16
  inReviewText.textCase = "UPPER"
  inReviewText.letterSpacing = {"unit":"PERCENT","value":1}
  inReviewText.fontName = {"family":"Roboto","style":"ExtraBold"}
  inReviewText.textAlignHorizontal = "CENTER"
  inReviewText.textAlignVertical = "BOTTOM"
  inReviewText.textAutoResize = "WIDTH_AND_HEIGHT"
  inReview.appendChild(inReviewText)

  // Create COMPONENT_SET
  var fileStatusComponentSet = figma.combineAsVariants([inProgress, complete, readyForEng, paused, inReview], figma.currentPage)
  fileStatusComponentSet.resize(234.0000000000, 375.0000000000)
  fileStatusComponentSet.primaryAxisSizingMode = "AUTO"
  fileStatusComponentSet.counterAxisSizingMode = "AUTO"
  fileStatusComponentSet.name = "FILE-STATUS"
  fileStatusComponentSet.visible = true
  fileStatusComponentSet.locked = false
  fileStatusComponentSet.opacity = 1
  fileStatusComponentSet.blendMode = "PASS_THROUGH"
  fileStatusComponentSet.isMask = false
  fileStatusComponentSet.effects = []
  fileStatusComponentSet.relativeTransform = [[1,0,768],[0,1,0]]
  fileStatusComponentSet.x = 768
  fileStatusComponentSet.y = 0
  fileStatusComponentSet.rotation = 0
  fileStatusComponentSet.layoutAlign = "INHERIT"
  fileStatusComponentSet.constrainProportions = false
  fileStatusComponentSet.layoutGrow = 0
  fileStatusComponentSet.fills = []
  fileStatusComponentSet.strokes = []
  fileStatusComponentSet.strokeWeight = 1
  fileStatusComponentSet.strokeAlign = "INSIDE"
  fileStatusComponentSet.strokeJoin = "MITER"
  fileStatusComponentSet.dashPattern = [10,5]
  fileStatusComponentSet.strokeCap = "NONE"
  fileStatusComponentSet.strokeMiterLimit = 4
  fileStatusComponentSet.cornerRadius = 5
  fileStatusComponentSet.cornerSmoothing = 0
  fileStatusComponentSet.paddingLeft = 20
  fileStatusComponentSet.paddingRight = 20
  fileStatusComponentSet.paddingTop = 20
  fileStatusComponentSet.paddingBottom = 20
  fileStatusComponentSet.primaryAxisAlignItems = "MIN"
  fileStatusComponentSet.counterAxisAlignItems = "MIN"
  fileStatusComponentSet.primaryAxisSizingMode = "AUTO"
  fileStatusComponentSet.layoutGrids = []
  fileStatusComponentSet.backgrounds = []
  fileStatusComponentSet.clipsContent = true
  fileStatusComponentSet.guides = []
  fileStatusComponentSet.expanded = true
  fileStatusComponentSet.constraints = {"horizontal":"MIN","vertical":"MIN"}
  fileStatusComponentSet.layoutMode = "VERTICAL"
  fileStatusComponentSet.counterAxisSizingMode = "AUTO"
  fileStatusComponentSet.itemSpacing = 20
  fileStatusComponentSet.description = ""
  fileStatusComponentSet.documentationLinks = []


  //create instance of status component for cover
  var coverFileStatusInstance = inProgress.createInstance()

  //add elemtents to coverPageFrame
  coverPageFrame.appendChild(projectNameText)
  coverPageFrame.appendChild(teamNameText);
  coverPageFrame.appendChild(coverFileStatusInstance)

}


let createReadme = (projectName, projectDescription, productPOC, designPOC, engPOC, slackChannel) => {
  //create ReadMe page
  var readmePage = figma.createPage()
  readmePage.name = "📖 README"
  figma.root.insertChild(1, readmePage)
  //set readMe page to current page
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
  frame_1_42.primaryAxisSizingMode = "AUTO"
  frame_1_42.counterAxisSizingMode = "AUTO"
  frame_1_42.layoutAlign = "STRETCH"
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
  text_1_43.layoutAlign = "STRETCH"
  text_1_43.fontName = {
    family: "Roboto",
    style: "Bold"
  }
  text_1_43.characters = projectName
  text_1_43.fontSize = 56
  text_1_43.textAutoResize = "HEIGHT"
  text_1_43.letterSpacing = {"unit":"PERCENT","value":-5.5}
  text_1_43.lineHeight = {"unit":"PERCENT","value":114.99999761581421}


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
  text_1_44.layoutAlign = "STRETCH"
  text_1_44.fontName = {
    family: "Roboto",
    style: "Bold"
  }
  text_1_44.characters = projectDescription
  text_1_44.fontSize = 24
  text_1_44.textAutoResize = "HEIGHT"
  text_1_44.letterSpacing = {"unit":"PERCENT","value":-3}
  text_1_44.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
  frame_1_42.appendChild(text_1_44)

  // Create RECTANGLE
  var rectangle_1_45 = figma.createRectangle()
  rectangle_1_45.resize(960.0000000000, 2.0000000000)
  rectangle_1_45.name = "Divider"
  rectangle_1_45.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8941176533699036,"g":0.8980392217636108,"b":0.9058823585510254}}]
  rectangle_1_45.relativeTransform = [[1,0,80],[0,1,230]]
  rectangle_1_45.x = 80
  rectangle_1_45.y = 230
  rectangle_1_45.layoutAlign = "STRETCH"
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
  frame_1_46.layoutAlign = "STRETCH"
  frame_1_39.appendChild(frame_1_46)

  // Create FRAME
  var frame_23_221 = figma.createFrame()
  frame_23_221.resize(527.0000000000, 380.0000000000)
  frame_23_221.name = "Frame 5"
  frame_23_221.fills = []
  frame_23_221.backgrounds = []
  frame_23_221.layoutMode = "VERTICAL"
  frame_23_221.counterAxisSizingMode = "AUTO"
  frame_23_221.layoutAlign = "STRETCH"
  frame_23_221.itemSpacing = 40
  frame_1_46.appendChild(frame_23_221)

  // Create FRAME
  var frame_23_222 = figma.createFrame()
  frame_23_222.resize(460.0000000000, 128.0000000000)
  frame_23_222.name = "Frame 3"
  frame_23_222.layoutMode = "VERTICAL"
  frame_23_222.counterAxisSizingMode = "AUTO"
  frame_23_222.itemSpacing = 16
  frame_23_222.layoutAlign = "STRETCH"
  frame_23_221.appendChild(frame_23_222)

  // Create TEXT
  var text_23_223 = figma.createText()
  text_23_223.resize(133.0000000000, 32.0000000000)
  text_23_223.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.22745098173618317,"g":0.2235294133424759,"b":0.21960784494876862}}]
  text_23_223.strokeWeight = 0
  text_23_223.strokeAlign = "CENTER"
  text_23_223.layoutAlign = "STRETCH"
  text_23_223.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_223.fontName = {
    family: "Roboto",
    style: "Bold"
  }
  text_23_223.characters = "Project team"
  text_23_223.fontSize = 24
  text_23_223.letterSpacing = {"unit":"PERCENT","value":-3}
  text_23_223.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
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
  frame_23_224.layoutAlign = "STRETCH"
  frame_23_224.itemSpacing = 4
  frame_23_222.appendChild(frame_23_224)

  // Create TEXT
  var text_23_226 = figma.createText()
  text_23_226.resize(104.0000000000, 24.0000000000)
  text_23_226.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3529411852359772,"g":0.3450980484485626,"b":0.34117648005485535}}]
  text_23_226.strokeWeight = 0
  text_23_226.strokeAlign = "CENTER"
  text_23_226.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_226.layoutAlign = "STRETCH"
  text_23_226.fontName = {
    family: "Roboto",
    style: "Regular"
  }
  text_23_226.characters = "PM"
  text_23_226.fontSize = 18
  text_23_226.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
  frame_23_224.appendChild(text_23_226)

  // Create TEXT
  var text_23_227 = figma.createText()
  text_23_227.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.18039216101169586,"g":0.4470588266849518,"b":0.8235294222831726}}]
  text_23_227.strokeWeight = 0
  text_23_227.strokeAlign = "CENTER"
  text_23_227.relativeTransform = [[1,0,400],[0,1,0]]
  text_23_227.x = 400
  text_23_227.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_227.layoutAlign = "STRETCH"
  text_23_227.fontName = {
    family: "Roboto",
    style: "Regular"
  }
  text_23_227.characters = productPOC
  text_23_227.fontSize = 18
  text_23_227.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
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
  group_23_225.layoutAlign = "STRETCH"
  group_23_225.expanded = true

  // Create TEXT
  var text_23_229 = figma.createText()
  text_23_229.resize(93.0000000000, 24.0000000000)
  text_23_229.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3529411852359772,"g":0.3450980484485626,"b":0.34117648005485535}}]
  text_23_229.strokeWeight = 0
  text_23_229.strokeAlign = "CENTER"
  text_23_229.relativeTransform = [[1,0,0],[0,1,28]]
  text_23_229.y = 28
  text_23_229.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_229.layoutAlign = "STRETCH"
  text_23_229.fontName = {
    family: "Roboto",
    style: "Regular"
  }
  text_23_229.characters = "Design"
  text_23_229.fontSize = 18
  text_23_229.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
  frame_23_224.appendChild(text_23_229)

  // Create TEXT
  var text_23_230 = figma.createText()
  text_23_230.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.18039216101169586,"g":0.4470588266849518,"b":0.8235294222831726}}]
  text_23_230.strokeWeight = 0
  text_23_230.strokeAlign = "CENTER"
  text_23_230.relativeTransform = [[1,0,400],[0,1,28]]
  text_23_230.x = 400
  text_23_230.y = 28
  text_23_230.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_230.layoutAlign = "STRETCH"
  text_23_230.fontName = {
    family: "Roboto",
    style: "Regular"
  }
  text_23_230.characters = designPOC
  text_23_230.fontSize = 18
  text_23_230.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
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
  group_23_228.layoutAlign = "STRETCH"
  group_23_228.expanded = true

  // Create TEXT
  var text_23_232 = figma.createText()
  text_23_232.resize(133.0000000000, 24.0000000000)
  text_23_232.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3529411852359772,"g":0.3450980484485626,"b":0.34117648005485535}}]
  text_23_232.strokeWeight = 0
  text_23_232.strokeAlign = "CENTER"
  text_23_232.relativeTransform = [[1,0,0],[0,1,56]]
  text_23_232.y = 56
  text_23_232.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_232.layoutAlign = "STRETCH"  
  text_23_232.fontName = {
    family: "Roboto",
    style: "Regular"
  }
  text_23_232.characters = "Engineering"
  text_23_232.fontSize = 18
  text_23_232.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
  frame_23_224.appendChild(text_23_232)

  // Create TEXT
  var text_23_233 = figma.createText()
  text_23_233.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.18039216101169586,"g":0.4470588266849518,"b":0.8235294222831726}}]
  text_23_233.strokeWeight = 0
  text_23_233.strokeAlign = "CENTER"
  text_23_233.relativeTransform = [[1,0,400],[0,1,56]]
  text_23_233.x = 400
  text_23_233.y = 56
  text_23_233.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_233.layoutAlign = "STRETCH" 
  text_23_233.fontName = {
    family: "Roboto",
    style: "Regular"
  }
  text_23_233.characters = engPOC
  text_23_233.fontSize = 18
  text_23_233.lineHeight = {"unit":"PERCENT","value":132.00000524520874}

  
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
  group_23_231.layoutAlign = "STRETCH"
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
  frame_23_240.layoutAlign = "STRETCH"
  frame_23_221.appendChild(frame_23_240)

  // Create TEXT
  var text_23_241 = figma.createText()
  text_23_241.resize(142.0000000000, 32.0000000000)
  text_23_241.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.22745098173618317,"g":0.2235294133424759,"b":0.21960784494876862}}]
  text_23_241.strokeWeight = 0
  text_23_241.strokeAlign = "CENTER"
  text_23_241.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_241.layoutAlign = "STRETCH"
  text_23_241.fontName = {
    family: "Roboto",
    style: "Bold"
  }
  text_23_241.characters = "Slack channel"
  text_23_241.fontSize = 24
  text_23_241.letterSpacing = {"unit":"PERCENT","value":-3}
  text_23_241.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
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
  frame_23_242.layoutAlign = "STRETCH"
  frame_23_240.appendChild(frame_23_242)

  // Create TEXT
  var text_23_244 = figma.createText()
  text_23_244.resize(135.0000000000, 24.0000000000)
  text_23_244.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3529411852359772,"g":0.3450980484485626,"b":0.34117648005485535}}]
  text_23_244.strokeWeight = 0
  text_23_244.strokeAlign = "CENTER"
  text_23_244.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_244.layoutAlign = "STRETCH"
  text_23_244.fontName = {
    family: "Roboto",
    style: "Regular"
  }
  text_23_244.characters = "To find out more:"
  text_23_244.fontSize = 18
  text_23_244.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
  frame_23_242.appendChild(text_23_244)

  // Create TEXT
  var text_23_245 = figma.createText()
  text_23_245.resize(127.0000000000, 24.0000000000)
  text_23_245.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.18039216101169586,"g":0.4470588266849518,"b":0.8235294222831726}}]
  text_23_245.strokeWeight = 0
  text_23_245.strokeAlign = "CENTER"
  text_23_245.relativeTransform = [[1,0,400],[0,1,0]]
  text_23_245.x = 400
  text_23_245.layoutAlign = "STRETCH"
  text_23_245.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_245.fontName = {
    family: "Roboto",
    style: "Regular"
  }
  text_23_245.characters = slackChannel
  text_23_245.fontSize = 18
  text_23_245.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
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
  group_23_243.layoutAlign = "STRETCH"

  // Create FRAME
  var frame_23_246 = figma.createFrame()
  frame_23_246.resize(460.0000000000, 100.0000000000)
  frame_23_246.name = "Frame 5"
  frame_23_246.relativeTransform = [[1,0,0],[0,1,280]]
  frame_23_246.y = 280
  frame_23_246.layoutMode = "VERTICAL"
  frame_23_246.counterAxisSizingMode = "AUTO"
  frame_23_246.itemSpacing = 16
  frame_23_246.layoutAlign = "STRETCH"
  frame_23_221.appendChild(frame_23_246)

  // Create TEXT
  var text_23_247 = figma.createText()
  text_23_247.resize(54.0000000000, 32.0000000000)
  text_23_247.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.22745098173618317,"g":0.2235294133424759,"b":0.21960784494876862}}]
  text_23_247.strokeWeight = 0
  text_23_247.strokeAlign = "CENTER"
  text_23_247.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_247.layoutAlign = "STRETCH"
  text_23_247.fontName = {
    family: "Roboto",
    style: "Bold"
  }
  text_23_247.characters = "Links"
  text_23_247.fontSize = 24
  text_23_247.letterSpacing = {"unit":"PERCENT","value":-3}
  text_23_247.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
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
  frame_23_248.layoutAlign = "STRETCH"
  frame_23_246.appendChild(frame_23_248)

  // Create TEXT
  var text_23_250 = figma.createText()
  text_23_250.resize(99.0000000000, 24.0000000000)
  text_23_250.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3529411852359772,"g":0.3450980484485626,"b":0.34117648005485535}}]
  text_23_250.strokeWeight = 0
  text_23_250.strokeAlign = "CENTER"
  text_23_250.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_250.layoutAlign = "STRETCH"
  text_23_250.fontName = {
    family: "Roboto",
    style: "Regular"
  }
  text_23_250.characters = "Project brief"
  text_23_250.fontSize = 18
  text_23_250.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
  frame_23_248.appendChild(text_23_250)

  // Create TEXT
  var text_23_251 = figma.createText()
  text_23_251.resize(60.0000000000, 24.0000000000)
  text_23_251.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.18039216101169586,"g":0.4470588266849518,"b":0.8235294222831726}}]
  text_23_251.strokeWeight = 0
  text_23_251.strokeAlign = "CENTER"
  text_23_251.relativeTransform = [[1,0,400],[0,1,0]]
  text_23_251.x = 400
  text_23_251.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_23_251.layoutAlign = "STRETCH"
  text_23_251.fontName = {
    family: "Roboto",
    style: "Regular"
  }
  text_23_251.characters = "https://"
  text_23_251.fontSize = 18
  text_23_251.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
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
  group_23_249.layoutAlign = "STRETCH"

  // Create RECTANGLE
  var rectangle_1_52 = figma.createRectangle()
  rectangle_1_52.resize(960.0000000000, 2.0000000000)
  rectangle_1_52.name = "Rectangle 2"
  rectangle_1_52.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8941176533699036,"g":0.8980392217636108,"b":0.9058823585510254}}]
  rectangle_1_52.relativeTransform = [[1,0,80],[0,1,724]]
  rectangle_1_52.x = 80
  rectangle_1_52.y = 724
  rectangle_1_52.layoutAlign = "STRETCH"
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
  frame_1_59.layoutAlign = "STRETCH"
  frame_1_39.appendChild(frame_1_59)

  // Create FRAME
  var frame_1_60 = figma.createFrame()
  frame_1_60.resize(960.0000000000, 120.0000000000)
  frame_1_60.name = "Frame 3"
  frame_1_60.layoutMode = "VERTICAL"
  frame_1_60.counterAxisSizingMode = "AUTO"
  frame_1_60.itemSpacing = 16
  frame_1_60.layoutAlign = "STRETCH"
  frame_1_59.appendChild(frame_1_60)

  // Create TEXT
  var text_1_61 = figma.createText()
  text_1_61.resize(98.0000000000, 32.0000000000)
  text_1_61.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.22745098173618317,"g":0.2235294133424759,"b":0.21960784494876862}}]
  text_1_61.strokeWeight = 0
  text_1_61.strokeAlign = "CENTER"
  text_1_61.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_1_61.layoutAlign = "STRETCH"
  text_1_61.fontName = {
    family: "Roboto",
    style: "Bold"
  }
  text_1_61.characters = "Overview"
  text_1_61.fontSize = 24
  text_1_61.letterSpacing = {"unit":"PERCENT","value":-3}
  text_1_61.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
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
  frame_1_62.layoutAlign = "STRETCH"
  frame_1_60.appendChild(frame_1_62)

  // Create TEXT
  var text_1_64 = figma.createText()
  text_1_64.resize(960.0000000000, 72.0000000000)
  text_1_64.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.3529411852359772,"g":0.3450980484485626,"b":0.34117648005485535}}]
  text_1_64.strokeWeight = 0
  text_1_64.strokeAlign = "CENTER"
  text_1_64.constraints = {"horizontal":"SCALE","vertical":"CENTER"}
  text_1_64.layoutAlign = "STRETCH"
  text_1_64.fontName = {
    family: "Roboto",
    style: "Regular"
  }
  text_1_64.characters = "The overview page is another opportunity to provide more context. Help others with finding additional resources and provide information on who they can reach out to with feedback or questions. Feel free to add or remove sections and line items as needed and consider adding separate links to documents like project briefs or research."
  text_1_64.fontSize = 18
  text_1_64.textAutoResize = "HEIGHT"
  text_1_64.lineHeight = {"unit":"PERCENT","value":132.00000524520874}
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
  group_1_63.layoutAlign = "STRETCH"

  // Create RECTANGLE
  var rectangle_1_65 = figma.createRectangle()
  rectangle_1_65.resize(960.0000000000, 2.0000000000)
  rectangle_1_65.name = "Rectangle 3"
  rectangle_1_65.fills = [{"type":"SOLID","visible":true,"opacity":1,"blendMode":"NORMAL","color":{"r":0.8941176533699036,"g":0.8980392217636108,"b":0.9058823585510254}}]
  rectangle_1_65.relativeTransform = [[1,0,80],[0,1,958]]
  rectangle_1_65.x = 80
  rectangle_1_65.y = 958
  rectangle_1_65.layoutAlign = "STRETCH"
  frame_1_39.appendChild(rectangle_1_65)

  
}

//create functions to easily make pages
//places at bottom of page list
var createPage = (nameString) => {
  let page = figma.createPage();
  page.name = nameString;
  figma.root.appendChild(page)
}

var createEngHandoff = () => {
  createPage("––––––– ⚒️ ENG HANDOFF –––––––");
  createPage("iOS – Mobile");
  createPage("iOS – Tablet");
  createPage("Android – Mobile");
  createPage("Android – Tablet");
  createPage("Web");
}

var createUserTesting = () => {
  createPage("––––––– 🔬USER TESTING –––––––");
  createPage("Prototype 1");
}

var createExplore = () => {
  createPage("––––––––– 🔮 EXPLORE ––––––––––");
  createPage("Explorations V0");
}

var createThink = () => {
  createPage("––––––––––– 🤔 THINK –––––––––––");
  createPage("Research");
}

var createArchive = () => {
  createPage("––––––––––––––––––––––––––––––––");
  createPage("📦 ARCHIVE");
}

var createLocalComponents = () => {
  createPage("––––––––––––––––––––––––––––––––");
  createPage("LOCAL COMPONENTS");
}

//create pages for eng handoff
if (figma.command === "createPagesEngHandoff") {
  createEngHandoff()
  figma.notify("Added pages for ENG HANDOFF")
  figma.closePlugin()
}

//create pages for User Testing
if (figma.command === "createPagesUserTesting") {
  createUserTesting()
  figma.notify("Added pages for USER TESTING")
  figma.closePlugin()
}

//create pages for Explore
if (figma.command === "createPagesExplore") {
  createExplore()
  figma.notify("Added pages for EXPLORE")
  figma.closePlugin()
}

//create pages for Think
if (figma.command === "createPagesThink") {
  createThink()
  figma.notify("Added pages for THINK")
  figma.closePlugin()
}

//create pages for Think
if (figma.command === "createPagesArchive") {
  createArchive()
  figma.notify("Added pages for ARCHIVE")
  figma.closePlugin()
}


figma.ui.onmessage = (event) => {
  if (event.type === "createProject") {
    loadRoboto().then(() => {
      
      createCover(event.projectName, event.teamName, event.color, event.textColor);
      createReadme(event.projectName, event.projectDescription, event.productPOC, event.designPOC, event.engPOC, event.slackChannel);
      //create certain pages
      let pagesToCreate = event.pagesToCreate
      //create eng handoff
      if (pagesToCreate.includes("engHandoff")) {
        console.log("create eng hand off page")
        createEngHandoff();
      }
      //create user testing
      if (pagesToCreate.includes("userTesting")) {
        console.log("create user testing page")
        createUserTesting();
      }
      //create explore
      if (pagesToCreate.includes("explore")) {
        console.log("create explore page")
        createExplore();
      }
      //create think
      if (pagesToCreate.includes("think")) {
        console.log("create thinkn page")
        createThink();
      }
      //create archive
      if (pagesToCreate.includes("archive")) {
        console.log("create archive page")
        createArchive();
      }
      //create local components
      if (pagesToCreate.includes("localComponents")) {
        console.log("create local components page")
        createLocalComponents();
      }
      figma.notify("Success! Now get to work")
      figma.closePlugin();
    })
  }
}
