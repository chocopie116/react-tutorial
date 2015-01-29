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
                <Comment author="John">John comment</Comment>
                <Comment author="Mike">Mike comment</Comment>
            </div>
        );
    }
});

var Comment = React.createClass({
    render: function() {
        return (
            <div className="commentAuthor">
                <h2 className="commentAuthor">
                {this.props.author}
                </h2>
                {this.props.children}
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
