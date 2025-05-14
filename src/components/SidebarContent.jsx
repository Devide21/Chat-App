import React from "react";
import ChatList from "./sidebar/ChatList";
import ContactList from "./sidebar/ContactList";
import Settings from "./sidebar/Settings";
import BookmarkList from "./sidebar/BookmarkList";
import CallHistory from "./sidebar/CallHistory";
import ProfileCard from "./sidebar/ProfileCard";
import WelcomePane from "./WelcomePane";
import Archived from "./sidebar/Archived";


const SidebarContent = ({ sidebar, setSelectedContact, onShowArchived }) => {


    switch (sidebar) {
        case "ChatList":
            return <ChatList
                onSelectContact={setSelectedContact}
                onShowArchived={onShowArchived} />;
        case "ContactList":
            return <ContactList onSelectContact={setSelectedContact} />;
        case "Archived":
            return <Archived
                onSelectContact={setSelectedContact}
                onShowArchived={onShowArchived} />;
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
            return <ChatList onSelectContact={setSelectedContact} onShowArchived={onShowArchived} />;
    }
};


export default SidebarContent;
