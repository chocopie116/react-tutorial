var converter = new Showdown.converter();

var CommentBox = React.createClass({
    //called once
    getInitialState: function() {
        return {data: []};
    },
    //called after rendered
    componentDidMount: function() {
        var self = this;
        $.ajax({
            url: self.props.url,
            dataType: 'json',
            success: function(data) {
                self.setState({data: data});
            },
            error: function(xhr, status, err) {
                console.log(error, self.props.url, status, err.toString());
            }.bind(self)
        });
    },
    render: function() {
        return (
            <div className="commentBox">
                <h1>these are comments</h1>
                <CommentList data={this.state.data} />
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
    <CommentBox url="comments.json" />,
    document.getElementById('content')
);
