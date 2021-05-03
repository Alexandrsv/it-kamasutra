import React from 'react';

const Profile = () => {
    return (
        <div className={'content'}>
            <div>
                <img className={'image-header'} src={'https://coverfiles.alphacoders.com/360/36044.jpg'}
                     alt={'header'}/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                my posts
                <div>
                    new posts
                </div>
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
