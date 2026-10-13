class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const n = position.length;
        const cars = position.map((p, i) => ({
            position: p,
            time: (target - p) / speed[i],
        }));

        //sort from closest to target to farthest
        cars.sort((a, b) => b.position - a.position);
        let fleet=[]
        for(const car of cars){
            if(fleet.length===0 || car.time>fleet[fleet.length-1]){
                fleet.push(car.time)
            }
            //otherwise it joins the previous fleet
        }

        
        return fleet.length;
    }
}
