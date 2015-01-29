var converter = new Showdown.converter();

//assume completed getting from server and parsing
var parsedDataFromServer = [
    {author: "John", text: "John comment"},
    {author: "Mike", text: "Mike comment"},
];

var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                <h1>these are comments</h1>
                <CommentList data={this.props.data} />
                <CommentForm />
            </div>
        );
    }
});
var CommentList = React.createClass({
    render: function() {

        //make Comment{React.Element} Array
        var commentNodes = this.props.data.map(function(comment) {
            return (
                <Comment author={comment.author}>{comment.text}</Comment>
            );
        });

        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

var Comment = React.createClass({
    render: function() {
        var rawMarkup = converter.makeHtml(this.props.children.toString());
        return (
            <div className="commentAuthor">
                <h2 className="commentAuthor">
                {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
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
    <CommentBox data={parsedDataFromServer} />,
    document.getElementById('content')
);
