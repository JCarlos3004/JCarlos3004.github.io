
async function UpdateDataGraph(){
    try {
        const data_0 = await fetch('/dashboard/getall');
        console.log(data_0)
        const data   = await data_0.json();
        console.log(data)
        MorrisArea('morris-area-chart-1', data);
        MorrisArea('morris-area-chart-2', data);
    }
    catch(e) {
        console.log(e);
    }
}
function MorrisArea(id, info){
            Morris.Area ({
                element: id,
                data: info,
                xkey: 'period', 
                ykeys: ['critico'], 
                labels: ['Critico'], 
                pointSize: 2,
                hideHover: 'auto',
                resize: true
            })
        }

UpdateDataGraph();
