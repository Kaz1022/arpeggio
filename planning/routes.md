## Routes to interact with the resources

B GET /users
R GET /users/:id
E POST /users/:id
A POST /users
(D POST /users/:id/delete) only if we demonstrate deleting users

B GET /events
R GET /events/:id
E POST /events/:id
A POST /events
D POST /events/:id/delete

B GET /favourites
R GET /favourites/:id
E POST /favourites/:id
A POST /favourites
D POST /favourites/:id/delete

