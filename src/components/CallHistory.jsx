import React from 'react';
import { FaVideo, FaPhone } from 'react-icons/fa';
// import './CallHistory.css'; // Custom styles for initials and status colors

const calls = [
    {
        name: 'Burgess Burt',
        // avatar: './assets/avatar-1.jpg',
        initials: 'BB',
        time: '5 May, 2016, 06:21',
        duration: '5:37',
        type: 'video',
        status: 'incoming',
    },
    {
        name: 'Bryant Shaffer',
        // avatar: '/assets/avatar2.jpg',
        initials: 'BS',
        time: '17 May, 2014, 10:22',
        duration: '5:24',
        type: 'audio',
        status: 'outgoing',
    },
    {
        name: 'Curtis Spears',
        initials: 'CS',
        time: '27 Nov, 2020, 08:14',
        duration: '2:43',
        type: 'video',
        status: 'missed',
    },
    {
        name: 'Mara Gilliam',
        // avatar: '/assets/avatar-3.jpg',
        initials: 'MG',
        time: '29 Aug, 2019, 01:24',
        duration: '2:41',
        type: 'video',
        status: 'missed',
    },
    {
        name: 'Duncan Snyder',
        // avatar: '/assets/avatar-4.jpg',
        initials: 'DS',
        time: '23 Dec, 2018, 08:00',
        duration: '1:57',
        type: 'audio',
        status: 'missed',
    },
    {
        name: 'Eunice Atkinson',
        initials: 'EA',
        time: '28 Oct, 2019, 09:42',
        duration: '1:24',
        type: 'video',
        status: 'incoming',
    },
    {
        name: 'Meyer Walton',
        // avatar: '/assets/avatar-5.jpg',
        initials: 'MW',
        time: '19 Sep, 2019, 07:37',
        duration: '1:22',
        type: 'audio',
        status: 'incoming',
    },
    {
        name: 'Debra Davis',
        initials: 'SB',
        time: '7 Oct, 2019, 02:34',
        duration: '4:52',
        type: 'video',
        status: 'incoming',
    },
    {
        name: 'Hansen Haynes',
        // avatar: '/assets/avatar-6.jpg',
        initials: 'HH',
        time: '16 Jan, 2014, 01:10',
        duration: '4:24',
        type: 'audio',
        status: 'missed',
    },
    {
        name: 'Burgess Burt',
        // avatar: './assets/avatar-1.jpg',
        initials: 'BB',
        time: '5 May, 2016, 06:21',
        duration: '5:37',
        type: 'video',
        status: 'incoming',
    },
    {
        name: 'Bryant Shaffer',
        // avatar: '/assets/avatar2.jpg',
        initials: 'BS',
        time: '17 May, 2014, 10:22',
        duration: '5:24',
        type: 'audio',
        status: 'outgoing',
    },
    {
        name: 'Curtis Spears',
        initials: 'CS',
        time: '27 Nov, 2020, 08:14',
        duration: '2:43',
        type: 'video',
        status: 'missed',
    },
    {
        name: 'Mara Gilliam',
        // avatar: '/assets/avatar-3.jpg',
        initials: 'MG',
        time: '29 Aug, 2019, 01:24',
        duration: '2:41',
        type: 'video',
        status: 'missed',
    },
    {
        name: 'Duncan Snyder',
        // avatar: '/assets/avatar-4.jpg',
        initials: 'DS',
        time: '23 Dec, 2018, 08:00',
        duration: '1:57',
        type: 'audio',
        status: 'missed',
    },
    {
        name: 'Eunice Atkinson',
        initials: 'EA',
        time: '28 Oct, 2019, 09:42',
        duration: '1:24',
        type: 'video',
        status: 'incoming',
    },
    {
        name: 'Meyer Walton',
        // avatar: '/assets/avatar-5.jpg',
        initials: 'MW',
        time: '19 Sep, 2019, 07:37',
        duration: '1:22',
        type: 'audio',
        status: 'incoming',
    },
    {
        name: 'Debra Davis',
        initials: 'SB',
        time: '7 Oct, 2019, 02:34',
        duration: '4:52',
        type: 'video',
        status: 'incoming',
    },
    {
        name: 'Hansen Haynes',
        // avatar: '/assets/avatar-6.jpg',
        initials: 'HH',
        time: '16 Jan, 2014, 01:10',
        duration: '4:24',
        type: 'audio',
        status: 'missed',
    },
];

const CallHistory = () => {
    return (
        <div className="border-end bg-white" style={{ width: "300px", height: "100vh", overflowY: "auto" }}>
            <div className=" d-flex justify-content-between position-sticky top-0 z-3 bg-white p-4 ">
                <h5 className="mb-0 fw-semibold text-dark opacity-75 fs-4 ">Calls</h5>
            </div>
            <div className="list-group bg-white rounded p-2">
                {calls.map((call, idx) => (
                    <div key={idx} className="d-flex align-items-center justify-content-between p-2 border-bottom">
                        <div className="d-flex align-items-center">
                            {call.avatar ? (
                                <img src={call.avatar} alt={call.name} className="rounded-circle me-2" width="40" height="40" />
                            ) : (
                                <div className="avatar-initials me-2">{call.initials}</div>
                            )}
                            <div>
                                <div className="fw-lighter text-secondary">{call.name}</div>
                                <small className={`text-${call.status === 'missed' ? 'danger' : 'success'}`}>
                                    {call.status === 'missed' ? '↘' : '↗'} {call.time}
                                </small>
                            </div>
                        </div>
                        <div className="text-end">
                            <small className='text-body-tertiary me-2'>{call.duration}</small>
                            {call.type === 'video' ? (
                                <FaVideo className="text-success" />
                            ) : (
                                <FaPhone className="text-success" />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CallHistory;
