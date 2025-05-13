import React from "react";
import ChatList from "./sidebar/ChatList";
import ContactList from "./sidebar/ContactList";
import Settings from "./sidebar/Settings";
import BookmarkList from "./sidebar/BookmarkList";
import CallHistory from "./sidebar/CallHistory";
import ProfileCard from "./sidebar/ProfileCard";
import WelcomePane from "./WelcomePane";

const SidebarContent = ({ sidebar, setSelectedContact }) => {
    // console.log(sidebar);

    switch (sidebar) {
        case "ChatList":
            return <ChatList onSelectContact={setSelectedContact} />;
        case "ContactList":
            return <ContactList onSelectContact={setSelectedContact} />;
        case "Settings":
            return <Settings />;
        case "BookmarkList":
            return <BookmarkList />;
        case "CallHistory":
            return <CallHistory />;
        case "UserProfile":
            return <ProfileCard />;
        case "ProfileCard":
            return <ProfileCard />;
        default:
            return <ChatList onSelectContact={setSelectedContact} />;
    }
};

export default SidebarContent;
