# Operating Archives VR Demo
This aim of this project was to create an engaging web space that allows users to learn about the history of various [17th century manikins found in Duke University's Rubenstein Library](https://repository.duke.edu/dc/homartifacts?f%5Bformat_facet_sim%5D%5B%5D=manikins+%28teaching+aids%29). Only about 100 manikins have survived and due to their rarity, they are not allowed to be touched by the public. [The VR demo I developed](http://www.stephaniefiddy.com/manikin/index.html) encourages future visitors attending the upcoming exhibit to learn more about the history of these special objects through an interactive demo. The interactive demo consists of a digital rendition of one of the Chinese manikins that informs the viewer about its history through an animated, clickable interface. 


## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites 
This repository has all the node modules included. Please refer to the `package.json` file found in the root folder for a list of dependencies. 

The main dependencies you will need are:
- [nodeJS](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/get-npm) 

### Installing
Before anything, make sure you have downloaded nodeJS and npm. npm is distributed with NodeJS so make sure you have installed NodeJS first. 

You can globally install npm with the following script:
```
npm install npm@latest -g
```

Once you have installed the depencencies, clone/download this repository and go to the project's root folder.

In the root folder install the necessary packages:
```
npm install -s
```

You can then run the project and go to the link detailed in your terminal!
```
npm start
```


## Textured model
![manikin still 1](https://github.com/sfiddy/operating-archives-vr/blob/master/static_assets/chinese-manikin/manikin-still-1.png)
![manikin still 2](https://github.com/sfiddy/operating-archives-vr/blob/master/static_assets/chinese-manikin/manikin-still-2.png)
![manikin still 3](https://github.com/sfiddy/operating-archives-vr/blob/master/static_assets/chinese-manikin/manikin-still-3.png)

## Demo
![manikin demo](https://media.giphy.com/media/C955TIF0Eh7ylXBxdb/giphy.gif)


## Future Development
My contributions to the Operating Archives project has set the foundations for future
developments. Future contributors will need to execute the following tasks: 1) retrieve the 3D
renderings for the other manikins within the Trent Collection 2) Incorporate the demo into a
more cohesive site so viewers can access the information outside of the exhibit and 3) Scale my
demo to provide interactivity for the other manikins.
Since task 1 is dependent more so on the Rubenstein’s Library’s ability to provide the 3D
scans, I will only expand on tasks 2 and 3.

### Task 2: Furnishing a comprehensive website
Given the time constraints for this project, I was unable to furnish an comprehensive
website that would have supported my demo with links to more information on the history of
these manikins. In the next few paragraphs, I have outlined the information architecture I foresee
in future developments in the web space.

The website should be divided into two sections: 1) the archival records section and 2)
the demo section. Within the archival records section, pictures of the manikins and a brief
description of all the manikins that the Trent Collection has in their possession should be
included. Because these manikins are best appreciated when they are seen, the archival data
should be organized in an aesthetically pleasing matter. I believe that implementing a masonrystyle
layout (like the one found in Pinterest) will attract viewers. For one, the masonry layout is
primarily illustrative because it places the emphasis on the images associated with the “boards”
topic. Additionally, viewers will be accustomed to (and to a certain extent, they will expect) that
the collection be visually organized. Filtering functionality to the first section should also be
added so that the users can easily query for the type of manikin they are interested in. Filters for
gender, origin, and the presence of a wooden base would be useful.

### Task 3: Scaling the demo
Regarding task 3, scaling the demo requires future contributors to make some technical
decisions. For one, they will need to decide what type of database to use for storage. I was able
to reduce the size of the model to 1/3 of its original size, but despite this reduction I anticipate
that large amounts of storage is needed to support multiple manikins. Overall, in the future, 
students will need to design a database system that can support storing and handling these large
files.

There is also a lot of work to be done in the exhibition space. The Duke Medical Library
plans to put these manikins in a permanent exhibition. However, I have not been given any
details regarding the space or resources available to me. In the future, it will be essential to
gather as much information regarding the exhibition and proceed from there.
Given the knowledge I have accumulated thus far, I am envisioning an exhibition space
that displays these manikins in a glass encasing. I would design the space to include iPads in
front of the manikins that have a web demo available. I would also place a touchable 3D printed
version of the respective manikins beside the iPad. This way, the viewer has various options on
how to engage with these objects. I envision the options to be as follows: 1) the viewer could see
the original piece (but not touch), 2) the viewer could tinker with a 3D printed version of the
manikin, and/or 3) through tinkering, the viewer would begin the digital simulation and learn
about the manikin through an interactive animation on the iPad.
