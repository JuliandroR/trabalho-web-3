import connection from './pool'

(() => {
    connection.query('CREATE TABLE IF NOT EXISTS responsible( \
            id serial, \
            name varchar(128), \
            cpf varchar(11), \
            PRIMARY KEY(id) \
        );',
        resultHandle
    );

    connection.query(
        'CREATE TABLE IF NOT EXISTS collaborator( \
            id serial, \
            name varchar(128), \
            cpf varchar(11), \
            email varchar(128), \
            phone varchar(15), \
            state varchar(64), \
            city varchar(128), \
            born_date Date, \
            responsible_id int, \
            PRIMARY KEY(id), \
            FOREIGN KEY(responsible_id) \
                    REFERENCES responsible(id) \
        );',
        resultHandle
    );

    connection.query(
        'CREATE TABLE IF NOT EXISTS photo( \
            id serial, \
            title varchar(128), \
            img varchar(128), \
            photographer varchar(128), \
            owner int, \
            PRIMARY KEY(id), \
            FOREIGN KEY(owner) \
                REFERENCES collaborator(id) \
        );',
        resultHandle
    );
    connection.end();
})();

function resultHandle(err, res) {
    if (err) {
        connection.end();
        console.error(err);
        process.exit(1);
    }
}