class Patient:
    def __init__(self, id, arrival_time, triage_category, queue_pos, status):
        self.id = id
        self.arrival_time = arrival_time
        self.triage_category = triage_category
        self.queue_pos = queue_pos
        self.status = status
    
    def get_queue_pos(self):
        return self.queue_pos
    
    def get_status(self):
        return self.status
    
    def get_arrival_time(self):
        return self.arrival_time
    
    def get_triage_category(self):
        return self.triage_category
    
    def get_time_left(self):
        

    




