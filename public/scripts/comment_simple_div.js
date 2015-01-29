var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                <h1>these are comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});
var CommentList = React.createClass({
    render: function() {
        return (
            <div className="commentList">
                This is commentList.
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function() {
        return (
            <div className="commentForm">
                This is commentForm.
            </div>
        );
    }
});

React.render(
    <CommentBox />,
    document.getElementById('content')
);
