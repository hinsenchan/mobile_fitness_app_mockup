# What is Mobile Fitness App Mockup?

Mobile Fitness App Mockup is a concept for a software product that is developed using the Software Development Life Cycle (SDLC). SDLC is a software development process with clearly defined phases. The purpose of utilizing a SDLC is to develop a high quality software that meets/exceeds customer expectations. The goal of Mobile Fitness App Mockup is to increase happiness in obesity patients. This software provides tools to motivate patients to lose weight. By enabling patients to lose weight, patients will be able to improve their quality of life and happiness.

![mobile_fitness_collage](https://github.com/hinsenchan/mobile_fitness_app_mockup/blob/master/readme/mobile_fitness_collage.png)

# General Description

This system is designed with the purpose of assisting motivated obesity patients to make dietary and physical changes to their lifestyle through the use of an exercise buddy as emotional support. Although there are other software products that help patients track their diet and exercise routines, only a few exists which target emotional support as a top priority. Based on the ethnographic research conducted for this system, it is suggested that obesity patients already fully understand the potential of living a healthy lifestyle through proper diet and exercise. Most of these patients feel that they have the knowledge to choose the right diet and exercises to improve their health. The difficulty in maintaining a new healthy lifestyle routine is a lack of emotional support from family and friends. Therefore this system focuses on assisting patients with locating an exercise buddy who is either a patient or former patient. By pairing up users with other patients who they can fully identify with, this system helps people who have similar dietary and exercise goals to motivate each other with their lifestyle change.

## Product Perspective

![img1_prodPerspective](https://github.com/hinsenchan/mobile_fitness_app_mockup/blob/master/readme/img1_prodPerspective.png)

This system consists of a mobile application and a web server. The mobile application is used by the obesity patients to find exercise buddies and events as well as to track their dietary and exercise routines. The web server is used to store user and event data and to manage the system as a whole.

Users shall save, delete, and update their information via the mobile application. The mobile application shall communicate with the web server to store and retrieve data via a mobile phone’s web browser as a web application. The web browser shall use the GPS data from the mobile device to access the user’s location data. The GPS data returned shall be used to assist users in locating an exercise buddy, find local events, and push and pull notifications from the mobile application. When a user signs on to the application, their location, profile, and health goals shall be tracked by the web server. It shall be made available for queries by other users to match patients with an exercise buddy.

In addition to finding an exercise buddy, the system shall also be able to push and pull location data to update users with system events. These system events may notify a user that a buddy has joined or left an event. For example, a user shall be notified if a buddy has checked in at a local gym or has signed up for a marathon.

The profile information, event data, and notifications used by the system is stored in the web server. The web server is responsible for saving, deleting, and updating data for the system. All of the interaction performed between users will go through the web server first before it reaches its intended party. Communication overall shall be establish through the internet.

## Product Features

### Profile

Each user may create a profile that contains personal information such as a screen name, password, email, start/end weight goals, age, quote, activities, limitations, and gym location. Information from the profile along with location data from the GPS locator will be used to match users with exercise buddies and group events.

### Find Exercise Buddies

The search function allows users to find other obesity patients and invite them as an exercise buddy. The search may be filtered by distance, exercise goals, activities, and/or physical limitations. Results may be returned as pins on the map page or as line items on the list page. When a potential buddy has been located, an invitation may be sent to add the user as a permanent buddy. In addition to finding new buddies, the search function will also show where buddies are if he/she have checked into an event.

### Find Activities

The search function allows users to find exercise activities and check into and out of it. The search may be filtered by distance, exercise goals, activities, and/or physical limitations. Results may be returned as pins on the map page or as line items on the list page. When an event has been located, users may view its details which shows a short description, points, members checked in list, and buddies checked in list.

### Receive Notifications

When a special event sponsored or advertised by the system is in the local vicinity, a message will be pushed to notify the user. The message will include a link which allows the user to view the details of the event which contains a description, points, members joined list, and buddies joined list. In addition to events, users will also receive notifications pertaining to their buddies. Information such as points earned, events joined, and activities checked into will be pushed to the user.

### Health Missions

Users may add health missions which are weight goals that he/she have set for themselves. There are no set end dates. Users may choose to end the mission when he/she feel comfortable doing so. While the mission is active, users may track their weight and calorie intake each day. Photos may be added to maintain a visual log of the user’s progress. Points and achievements may be earned for the mission by accomplishing very tasks and milestones.

### Earn Motivational Rewards

Points and achievements may be earned by the user for accomplishing tasks and milestones during the course of a health mission. Points are used to rank users on a leaderboard with patients who have similar weight reduction goals. The motivational rewards are used to help users monitor their own progress as well as view other users’ progress.

### Join Group Events

Group events are system hosted or sponsored events such as marathons, decathlons, themed runs, etc. New group events are pushed to users’ notification list. Users may also search for events in their local vicinity. Each event has a profile which displays its description, points rewarded, participating member list, and participating buddies list.

## User Characteristics

There are two types of users who shall interact with this system: 

Administrators:
* Administrators shall perform upgrades and maintenance for both the web server and mobile application. 
* Administrators may add, remove, or update data from the web server.
* Administrators may add, remove, or update features from the mobile application.
* Administrators may also add, remove, or update users and events from the system.
* Administrators shall only interact with the system through the web server.

Patients:
* Patients shall interact with each other using the mobile application while using the web server as the communication hub.
* Patients may add, remove, or update their profile information through the use of the mobile application. This data shall then persist through the web server.
* Patients may also update their location and status information.
* Patients may also query and filter for information from the web server to find exercise buddies and group events.

## General Constraints

Since the system relies on the internet as its communication medium, a valid interaction connection must be maintained at all times for the mobile application to function. In addition to an active internet connection, the mobile application relies heavily on GPS location data from the mobile device to connect users and events.
If a user is using a device that does not have a GPS locator or have blocked location services in their privacy settings, the system will be unable to utilize this user as an exercise buddy. In addition, it will be unable to track this user’s activities. The web server will be constrained by its storage and network capacity. If the storage is full, users will be unable to add or update data. If the number of users signed into the system outweighs its network capacity, the system may crash or will be forced to deny service requests.

The interface that users interact with is the mobile application. Because the mobile application utilizes the web browser to run, it will be constrained by the technology that is available to modern mobile web browsers and cell phone devices. The mobile application will be limited to utilizing HTML5 and JavaScript as its front- end. On the backend, it will be limited by the server programming language the system resides on. In addition, the physical screen size of the application will be limited to the device of the user.

## Assumptions and Dependencies

An assumption about the system is that it will be used on mobile phones that have GPS location services. If the mobile device does not have a GPS locator or the user has disabled it, the system will be unable to function fully. The user will still be able to utilize the system services, but will be unable to contribute any location data to it. For example, a user without GPS will be able to track their dietary and exercise routines, but he/she will be unable to find an exercise buddy or group event.

Another assumption is that users of this system are obesity patients who are motivated to make a lifestyle change. If a patient is not already motivated to engage and maintain a healthy lifestyle, this system will not function due to user rejection. Patients must already be knowledgeable and motivated to eat right and exercise properly. This system is used to assist patients in finding emotional support in an effort to assist them in maintaining the routine. If the user is not motivated to diet or exercise at all, this system will not be used by the user at all.

# User Interface Mockup

## Login

* The system shall accept a login request when the username and password is provided.

![img2_login](https://github.com/hinsenchan/mobile_fitness_app_mockup/blob/master/readme/img2_login.png)

![img3_login](https://github.com/hinsenchan/mobile_fitness_app_mockup/blob/master/readme/img3_login.png)

## Sign Up

* If the user is new to the application, the system shall prompt the user to create a user account.
* To create an account, the user shall enter some basic information (username, password, current weight, and desired weight).
* The user shall upload a photo either by taking a picture or selecting a picture.
* The user shall provide additional information (quotes about himself, age, activities, limitations, and gym he is going).

![img4_signup](https://github.com/hinsenchan/mobile_fitness_app_mockup/blob/master/readme/img4_signup.png)

![img5_signup](https://github.com/hinsenchan/mobile_fitness_app_mockup/blob/master/readme/img5_signup.png)

## Menu

* After a successful login, the main menu shall be displayed to the user.
* The menu contains options which include "Find Buddies and Activities",
"My Notifications", "My Profile", "My Buddy List", "My Missions", and "Group Events".

![img6_menu](https://github.com/hinsenchan/mobile_fitness_app_mockup/blob/master/readme/img6_menu.png)

## Find Buddies and Activities

* The system shall display a filtered list of buddies, other members and activities when a filter is applied (such as distance, start/end weight goal, activity and physical/diet limitations).
* The system shall show members/activities based on the search criteria.
* The system shall provide an option to send messages.
* The system shall provide an option to add a friend.

![img7_findBuddiesAndActivity.png](https://github.com/hinsenchan/mobile_fitness_app_mockup/blob/master/readme/img7_findBuddiesAndActivity.png)

![img8_findBuddiesAndActivity](https://github.com/hinsenchan/mobile_fitness_app_mockup/blob/master/readme/img8_findBuddiesAndActivity.png)

![img9_findBuddiesAndActivity](https://github.com/hinsenchan/mobile_fitness_app_mockup/blob/master/readme/img9_findBuddiesAndActivity.png)

## Notifications

* The system shall push notifications to the user.

![img10_getNotifications](https://github.com/hinsenchan/mobile_fitness_app_mockup/blob/master/readme/img10_getNotifications.png)

## View Profile

* On the profile screen, the user shall be able to view his name, start/end weight goal, overall points, age, weight, quote, activities, limitations, and gym.
* In addition, the user shall be able to view his missions, achievements and leaderboard.

![img11_viewProfile](https://github.com/hinsenchan/mobile_fitness_app_mockup/blob/master/readme/img11_viewProfile.png)

## View Mission List

* User shall be able to see his start and end weight goal.
* User shall be able to enter his current weight and calories.
* User shall be able to upload before/after photos.
* User shall be able to end his mission.
* User shall be able to view his past missions with his start/end goal weight,
achievements and before/after photos.

![img12_missionList](https://github.com/hinsenchan/mobile_fitness_app_mockup/blob/master/readme/img12_missionList.png)

## View Achievements:
* User shall receive points for earning different achievements.
* The System shall award the user 3x points for submitting weight, 1x points for following a healthy diet, 3x points for going on 3 consecutive days to the gym, 10x points for going on 5 consecutive days to the gym, and 3x points for starting a mission.

![img13_achievements](https://github.com/hinsenchan/mobile_fitness_app_mockup/blob/master/readme/img13_achievements.png)

##  View Leaderboard:
* User shall be able to view other members' profile and the points they collected.
* User shall be able to send a friend request to other members on the leaderboard.
* User shall be able to send messages to other members on the leaderboard.

![img14_leaderboard](https://github.com/hinsenchan/mobile_fitness_app_mockup/blob/master/readme/img14_leaderboard.png)

## View Buddy List:
* User shall be able to see their buddy list with his/her buddies’ start and end goal, and their quote.
* User shall be able to send buddies a message.

![img15_buddyList](https://github.com/hinsenchan/mobile_fitness_app_mockup/blob/master/readme/img15_buddyList.png)

##  View Event List:
* User shall be able to view group events with its name and description.
* The event list shall display the points a user can achieve if he/she attends.
* User shall be able to view details about the event activities, members’
participation, and his buddies’ participation.
* User shall be able to join or unjoin the event activity.
* User shall also be able to check in for the event.

![img16_eventList](https://github.com/hinsenchan/mobile_fitness_app_mockup/blob/master/readme/img16_eventList.png)

![img17_eventList](https://github.com/hinsenchan/mobile_fitness_app_mockup/blob/master/readme/img17_eventList.png)

# Use Cases

## Use Case 1: General Patient, Admin Activities

![img18_useCase](https://github.com/hinsenchan/mobile_fitness_app_mockup/blob/master/readme/img18_useCase.png)

## Use Case 2: Search a Buddy

![img19_useCase](https://github.com/hinsenchan/mobile_fitness_app_mockup/blob/master/readme/img19_useCase.png)

## Use Case 3: Receiving Notifications

![img20_useCase](https://github.com/hinsenchan/mobile_fitness_app_mockup/blob/master/readme/img20_useCase.png)

## Use Case 4 : Fitness Activities

![img21_useCase](https://github.com/hinsenchan/mobile_fitness_app_mockup/blob/master/readme/img21_useCase.png)

# Analysis Models

## Activity Diagram

![img22_activityDiagram](https://github.com/hinsenchan/mobile_fitness_app_mockup/blob/master/readme/img22_activityDiagram.png)

## Sequence Diagram

![img23_sequenceDiagram](https://github.com/hinsenchan/mobile_fitness_app_mockup/blob/master/readme/img23_sequenceDiagram.png)

# Credits

This software concept was developed by Khushali Bhatt, Hinsen Chan, Ashwini Nalage, Benjamin Sorlie at Santa Clara University in Fall 2014.
