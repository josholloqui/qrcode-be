import server from './server';

const port = parseInt(process.env.PORT || '4000');

const starter = new server().start(port)
  .then(Port => console.log(`Running on port ${Port}`))
  .catch(error => {
    console.log(error)
  });

export default starter;
