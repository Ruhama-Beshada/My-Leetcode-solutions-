class EventEmitter {
    eventMap = {};

    /**
     * @param {string} event
     * @param {Function} cb
     * @return {Object}
     */
    subscribe(event, cb) {
        if (!this.eventMap.hasOwnProperty(event)) {
            this.eventMap[event] = new Set();  
        }
        this.eventMap[event].add(cb);

        return {
            unsubscribe: () => {
                this.eventMap[event].delete(cb); 
            }
        };
    }

    /**
     * @param {string} event
     * @param {Array} args
     * @return {Array}
     */
    emit(event, args = []) {
        const res = [];
        (this.eventMap[event] ?? new Set())      
           .forEach((cb) => res.push(cb(...args)));
        return res;
    }
}
