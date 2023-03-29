import React from 'react'
import { Button, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'

import notifee, {
  AndroidImportance,
  RepeatFrequency,
  TriggerType,
} from '@notifee/react-native'

import { useNotification } from './hooks/useNotification'

export const TestNotification = () => {
  const {
    createChannel,
    requestPermission,
    displayNotification,
    displayTriggerNotification,
    getTriggerNotificationIds,
    cancelTriggerNotifications,
    cancelAllNotifications,
    cancelNotification,
  } = useNotification()

  // Request permission
  async function handleRequestPermission() {
    await requestPermission()
  }

  // Create a channel
  async function handleCreateChannel() {
    const channel = {
      id: 'my-channel-id',
      name: 'My Channel Name',
      description: 'My Channel Description',
      importance: AndroidImportance.HIGH,
    }
    await createChannel(channel)
    return channel.id
  }

  // Display a notification
  async function handleDisplayNotification() {
    const notification = {
      title: 'My Notification Title',
      body: 'My Notification Body',
      android: {
        channelId: await handleCreateChannel(),
      },
    }
    await displayNotification(notification)
  }

  // Create a trigger notification
  const handleCreateTriggerNotification = async () => {
    const notification = {
      title: 'My Trigger Notification Title',
      body: 'My Trigger Notification Body',
      android: {
        channelId: await handleCreateChannel(),
      },
    }
    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: Date.now() + 6000, // display notification 1 minute from now
      repeatFrequency: RepeatFrequency.DAILY, // repeat the notification every day
    }
    await displayTriggerNotification(notification, trigger as any)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <View style={[styles.container, styles.center]}>
        <Button
          title='Display Notification'
          onPress={handleDisplayNotification}
        />
        <Button
          title='Create Trigger Notification'
          onPress={handleCreateTriggerNotification}
        />
        {/* <Button
          title='Cancel All Notifications'
          onPress={cancelAllNotifications}
        /> */}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
})

export default TestNotification
