# Individual Project - Final Deliverable
## by Ryan Murphy
### ISTE-240

**Site Topic:** The World of Sonic the Hedgehog
**Pages:** *Overview, Characters, History, Population, Places, Organizations, Oddities, Gemstones, Tragedies, Aliens, Citation, Reviews, Quiz*

## New Elements:

### 10 Question Quiz - JavaScript-Powered Special Feature

I implemented a quiz made entirely that tests your knowledge of the contents of the website. It does not use HTML Forms, but instead entirely JavaScript. It is easy to add different questions to it, and is dynamic. It lets you know how many questions you got correct out of how many there were. There is no answer key, as it encourages replayability by going back into the website and searching for answers. You can access it through the navigation bar. The image on the quiz website is the hint bubble from the Sonic the Hedgehog franchise, so I believed it fit on the quiz section.

### Dynamic Reviews Page - HTML Form / Database Implementation with PHP and JavaScript

I created a reviews page for the website that uses HTML Forms to submit. It displays the users name, rating, and comment (your review) along with previous reviews when you submit. It utilizes a MySQL database created with PHP and the help of the Adminer software. JavaScript is used for client-side validation. If you don't put a name, you will be marked as Anonymous. If you don't put a rating, you will be asked to resubmit. Comments are not required but are encouraged. PHP is also used for server-side validation.

### PHP Modularity

I renamed all files to have a ".php" extension. I utilized PHP includes for the header, navigation, and database login.

## Older Elements:

### Required Pages & Deliverables

I have met all of what is required of me. 
- 10 pages, plus a reference page. 
- Website uploaded to Solace.
- readme.md (You're Here!)

### Content

I wrote all of the content myself, with Works Cited Page *(cite.html)* listing my references I used to fill in the gaps of my knowledge. My content pages are organized by different aspects of Sonic's World that would be important for a reader to get the full picture. 

All the content is strictly adhering to the canonical video game world of Sonic the Hedgehog. Comics, TV Shows, and Games that are non-canonical spin-off stories are not taken into account here.

I took inspiration from Sonic Channel JP, which I listed in my Works Cited Page *(cite.html)*, for Significant Characters *(characters.html)*. Particularly, the list below the character names that displays Likes, Dislikes, and Age. I have always thought it was a cute addition on Sonic Channel JP, so I wanted to include something similar on my own site. It is the only place for certain fun facts such as Sonic enjoying chili dogs or Knuckles enjoying grapes.

### Information Architecture & Organization

Users are started on the Overview Page *(index.html)* in to let them know brief information surrounding the sites scope and purpose as well as the basics of Sonic's world. Then, they are directed to Significant Characters *(characters.html)*. It is worth noting that these are not the only four Sonic characters. There are many others, but these four are the ones that it is required to know about to understand the information in the greater website. 

After reading that page, they are free to navigate the site as they please using the navigation bar on top. There is no specific intended order after Overview and Characters.

There are hyperlinks on unique parts to Sonic's World that lead to certain paragraphs in the website, to further user understanding of the topic when reading and make sure they don't get lost by not knowing the people, places, or things being referenced.

### Navigation & Usability

My navigation bar is hierarchical, featuring all 11 pages. It is present on all pages.
There is a current page indicator in the form of a lighter blue highlighting what page you are on.

### HTML Structure & Semantics 

I used proper semantic HTML elements such as section, heading, h1, h2, and h3 when appopriate. There is a title tag on every page, that will be controlled by a current_page variable in the Final Deliverable.


### CSS, Layout, and Visual Design

I organized the layout of the website with CSS Grid Areas. The images alternate positions with respect to the paragraphs after each one to create variety and prevent the pages from looking repetitive.

The colors of my site takes heavy inspiration from the main character of the franchise, Sonic, as well as the aesthetics of the franchise. The color palette consists of various shades of blues; the primary color of Sonic the Hedgehog. There are also complimentary reds such as the border, links, or the hovering color in the navigation bar. These are inspired by Sonic's iconic red running shoes, which serve as a compliment to his rich and deep blue, not another main color.

The favicon of all of my site pages is a blue emblem resembling Sonic the Hedgehog. It is used to represent the series on multiple occassions, so it is fitting as an icon for my website representing the series as well.

### Responsive Design

My website has different layouts for Desktop and Mobile that I implemented using Media Queries. I developed this site with a desktop-first mindset, as it is a webpage displaying information that one would theoretically go on while researching Sonic the Hedgehog.

The mobile layout places images below each paragraph of text it corresponds to. I also reduced the image width significantly for mobile layouts as to prevent a situation where someones screen would be purely filled with an image and no background information. It is good to enable the mobile layout to see the image and the background text at the same time just like in a desktop layout.

### Technical Integrity & Compliance

I developed this webpage using HTML, CSS, and JavaScript in Visual Studio Code. I wrote all of the code myself, and did not use any frameworks or libraries.
