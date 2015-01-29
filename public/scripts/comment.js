var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                Hello React. This is CommentBox
            </div>
        );
    }
});

React.render(
    <CommentBox />,
    document.getElementById('content')
);
