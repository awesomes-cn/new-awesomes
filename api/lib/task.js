const arg = process.argv

let group = require(`../task/${arg[2]}`)
group[arg[3]]()
