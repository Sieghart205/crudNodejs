const controller = {};

controller.list = (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err){
            res.json(err);
        }
        conn.query("SELECT * FROM `tareas`",(err,tareas)=>{
            if(err){
                res.json(err)
            }
            res.render("tareas",{data:tareas});
        })
    })
}

controller.save = (req,res)=>{
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query("INSERT INTO tareas set ?",[data],(err,rows)=>{
            if(err){
                res.json(err);
            }
             res.redirect('/');
        });

    })
}

controller.delete = (req,res)=>{
    const id = req.params.id;
    req.getConnection((err,conn)=>{
        if(err){
            res.json(err);
        }
        conn.query("DELETE FROM tareas WHERE TareaID = ?",[id],(err,rows)=>{
            if(err){
                res.json(err)
            }
            res.redirect("/");
        })
    })
}

controller.updateForm = (req,res)=>{
    const id = req.params.id;
    req.getConnection((err,conn)=>{
        if(err){
            res.json(err);
        }
        conn.query("SELECT * FROM Tareas WHERE TareaID = ?",[id],(err,tareas)=>{
            res.render("tareaUp",{data:tareas})
        });
        
    })
}

controller.update = (req,res)=>{
    const data = req.body;
    const id = req.params.id;
    req.getConnection((err,conn)=>{
        if(err){
            res.json(err)
        }
        conn.query("UPDATE `tareas` SET ? WHERE TareaID = ?",[data,id],(err,rows)=>{
             if(err){
                res.json(err);
             }
             res.redirect("/");
        })
    })
}

module.exports = controller;