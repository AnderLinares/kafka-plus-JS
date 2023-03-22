const kafka = require('kafka-node')

const client = new kafka.KafkaClient({kafkaHost: 'localhost:9092'});


// CONSUMIDOR

// var consumer = new kafka.Consumer(client, [{topic: 'TutorialTopic'}])

// consumer.on('message', function(msg){
//     console.log(msg);
// })


// PRODUCTOR

var producer = new kafka.Producer(client)

producer.on('ready', ()=> {
    setInterval(() => {
        producer.send([
            {
                topic: 'TutorialTopic',
                messages: 'Mensaje Automático cada 5 segundos'
            }
        ], (err, data)=>{
            console.log(err);
        })
    }, 5000)    
})

