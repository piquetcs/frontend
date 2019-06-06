import { Component, Input } from '@angular/core';
import { IActivity } from '../models/activity'
@Component({})
export class ActivityThumbnailComponent{

    @Input() activity: IActivity;
    


}