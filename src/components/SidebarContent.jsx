import React from "react";
import ChatList from "./ChatList";
import ContactList from "./ContactList";
import Settings from "./Settings";
import BookmarkList from "./BookmarkList";
import CallHistory from "./CallHistory";
import ProfileCard from "./ProfileCard";
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
