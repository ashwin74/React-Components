import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'; // './' indicates - look in the same folder currently in
import ApprovalCard from './ApprovalCard';

const App = () => {
    return(
        <div className="ui container comments">
            {/* {CommentDetail} - parenthesis are used to refer JS Variables. */}
            {/* Treat imported component as JSX */}
            
            <ApprovalCard>
                <CommentDetail author="Ashwin" time="Today at 4AM" post="great man" image={faker.image.avatar()} />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail author="Aryan" time="Today at 11AM" post="cool man" image={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Ananya" time="Yestarday at 4AM" post="nice man" image={faker.image.avatar()} />
            </ApprovalCard>       
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);