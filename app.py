from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('dashboard.html')
@app.route('/applications')
def applications():
    return render_template('applications.html')

@app.route('/activity-logs')
def activity_logs():
    return render_template('activity-logs.html')

@app.route('/blog-editor')
def blog_editor():
    return render_template('blog-editor.html')

if __name__ == '__main__':
    app.run(debug=True)
