import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { getContent } from '@actions/content';
import { InfoIcon, VideoIcon, HeartIcon } from '@icons';
import { classes } from './Styles';

const ListHook = ({
  className,

  getDoctors,
  errorText,
  doctors,
}) => {
  useEffect(() => {
    getDoctors();
  }, [getDoctors]);

  const getSrcImg = (id: number) => (
    `./server/images/${id % 10}.png`
  );

  return (
    <div className={className}>
      {errorText ? <span>{errorText}</span> : null}
      <div className={classes.title}>Root Canal doctors in New York, NY</div>
      <div className={classes.info}>
        <InfoIcon />
        <span className={classes.infoText}>
          The average price of a procedure in New York is $300
        </span>
      </div>
      <div className={classes.list}>
        {(doctors || []).map((doctor) => (
          <div className={classes.item} key={doctor.id}>
            <div className={classes.photo}>
              <img alt="avatar" src={getSrcImg(doctor.id)} />
              {doctor.telehealth ? <VideoIcon className={classes.video} /> : null}
            </div>
            <div className={classes.left}>
              <div className={classes.name}>{doctor.name}, {doctor.insurances}</div>
              <div className={classes.speciality}>
                <div>{doctor.speciality}</div>
                <div className={clsx(classes.point, classes.specialitySplitter)}></div>
                <div>{doctor.experience} Year{doctor.experience === 1 ? '' : 's'} Experience</div>
                <div className={clsx(classes.point, classes.specialitySplitter)}></div>
                <div className={classes.reviews}>
                  {doctor.reviewsCount} Review{doctor.reviewsCount === 1 ? '' : 's'}
                </div>
              </div>
              <div className={classes.address}>
                {doctor.telehealth ? (
                  <>
                    <div>Video visit</div>
                    <div className={clsx(classes.point, classes.specialitySplitter)}></div>
                  </>
                ) : null}
                <div>{doctor.address}</div>
              </div>
            </div>
            <div className={classes.right}>
              <div className={classes.agvPrice}>avg. price</div>
                <div className={classes.price}>${doctor.price || 500}</div>
              <div className={classes.like}>
                <HeartIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const stateToProps = (state, props) => ({
  ...props,

  errorText: state.content.errorText,
  doctors: state.content.doctors,
});

export const List = connect(stateToProps, {
  getDoctors: getContent,
})(ListHook);
