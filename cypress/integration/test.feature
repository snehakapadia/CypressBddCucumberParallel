Feature: Testing Scenarios

    Scenario: Sign up and post comment conduit
        Given User navigates to url
        When User clicks on "Sign Up" button
        And User enters "Username" as "sneha;data;time;stamp"
        And User enters "Email" as "snehakapadia948+;data;time;stamp@gmail.com"
        And User enters "Password" as "Testing@123"
        And User clicks on "Sign In Button" button
        Then User checks if "Your Feed" exists "on" page
        And User checks if "New Post" exists "on" page
        When User clicks on "New Post" button
        And User enters "Article Title" as "Test Title"
        And User enters "Article About" as "Test"
        And User enters "Article Details" as "Test"
        And User enters "Tags" as "Test"
        And User clicks on "Publish Article" button
        Then User checks if "Write Comment" exists "on" page
        And User checks if "Post Comment" exists "on" page 
        When User enters "Write Comment" as "Test"
        And User clicks on "Post Comment" button
        Then User checks if "Comment Verfication" is there with the text as "Test"
        And User checks if "Comment Author" is there with the text as "<Author_Name>"
        When User clicks on "Delete Post" button
        And User reloads the page
        Then User checks if "Comment Verfication" exists "not" page
        And User checks if "Comment Author" exists "not" page
        When User clicks on "Settings" button
        Then User checks if "Logout" exists "on" page
        When User clicks on "Logout" button

