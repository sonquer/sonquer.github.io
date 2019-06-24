(function(users) {
    $('#github-repos').html('');
    for(let index in users) {
        $.getJSON(`https://api.github.com/users/${users[index]}/repos`, function( data ) {
            for(let dataIndex in data) {
                let repo = data[dataIndex];
                $('#github-repos').append(`
                    <a target='_blank' href='${repo.html_url}' class='repo-box'>
                        <div class='repo-box-item'>
                            <div>
                                ${repo.language}
                            </div>
                        </div>
                        <h5>
                            ${repo.full_name}
                        </h5>
                    </a>`
                );
            }
        });
    }
})(['sonquer']);