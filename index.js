var eejs = require('ep_etherpad-lite/node/eejs');

exports.eejsBlock_scripts = function(hook_name, args, cb){
  args.content = args.content + eejs.require("ep_ruler/templates/scripts.ejs");
  return cb();
}

exports.eejsBlock_mySettings_dropdowns = function(hook_name, args, cb){
  args.content = args.content + eejs.require("ep_ruler/templates/rulerMenu.ejs");
  return cb();
}

exports.eejsBlock_body = function(hook_name, args, cb){
  args.content = args.content + eejs.require("ep_ruler/templates/ruler.ejs");
  return cb();
}

exports.eejsBlock_styles = function(hook_name, args, cb){
  args.content = args.content + eejs.require("ep_ruler/templates/styles.ejs");
  return cb();
}
