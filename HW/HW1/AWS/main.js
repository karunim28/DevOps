var AWS = require('aws-sdk');
AWS.config.loadFromPath('./aws_config.json');

var ec2 = new AWS.EC2();

var params = {
  ImageId: 'ami-1624987f', // Amazon Linux AMI x86_64 EBS
  InstanceType: 't1.micro',
  MinCount: 1, MaxCount: 1
};

// Create the instance
ec2.runInstances(params, function(err, data) {
  if (err) { console.log("Could not create instance", err); return; }

  var instance = data.Instances[0];
  console.log("Instance: ", instance);
  var instanceId = data.Instances[0].InstanceId;
  console.log("Instance Id: ", instanceId);
  var instanceIp = data.Instances[0].PrivateIpAddress;
  console.log("Instance Ip: ", instanceIp);
});